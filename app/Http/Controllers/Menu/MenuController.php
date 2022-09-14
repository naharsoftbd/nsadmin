<?php

namespace App\Http\Controllers\Menu;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use URL;
use App\Models\Role;
use App\Models\User;
use App\Models\Menu;
use App\Models\ChildMenu;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    
        if(Auth::user()->can(['edit']) || Auth::user()->can(['read'])){

            $menus = Menu::orderBy('order_by','ASC')->get()->map(function ($menu) {
                return [
                    'id' => $menu->id,
                    'name' => $menu->name,
                    'slug' => $menu->slug,
                    'order_by' => $menu->order_by,
                    'menu_method' => $menu->menu_method,
                    'menu_icon' => $menu->menu_icon,
                    'created_at' => $menu->created_at,
                    'updated_at' => $menu->updated_at,
                    'edit_url' => Auth::user()->can('edit') ? URL::route('menus.edit', $menu):null,
                ];
            });

            return Inertia::render('Menus/Menus', [
                'menus' => $menus,
                'status' => session('status'),
            ]);

        }else{

            return redirect()->intended('/dashboard');
        }
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        if(Auth::user()->can('create')){

            $roles = Role::all()->map(function ($role) {
                return [
                    'value' => $role->id,
                    'label' => $role->name
                ];
            });

            $menus = Menu::orderBy('order_by','ASC')->get();

            return Inertia::render('Menus/Create', [
                'roles' => $roles,
                'menus' => $menus,
                'status' => session('status'),
            ]);

        }else{

            return redirect()->intended('/dashboard');
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255',
        ]);

        if($request->parent_menu){

            $menu = ChildMenu::create([
            'name' => $request->name,
            'slug' => $request->slug,
            'order_by' => $request->order_by,
            'menu_method' => $request->menu_method,
            'menu_icon' => $request->menu_icon,
            'menu_id' => $request->parent_menu
            ]);

        }else{

            $menu = Menu::create([
            'name' => $request->name,
            'slug' => $request->slug,
            'order_by' => $request->order_by,
            'menu_method' => $request->menu_method,
            'menu_icon' => $request->menu_icon
            ]);

            $role = Role::find($request->role);
            $menu->roles()->attach($role);

        }        

        event(new Registered($menu));

        return redirect()->intended('/dashboard');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        if(Auth::user()->can('edit')){

            $roles = Role::all()->map(function ($role) {
                return [
                    'value' => $role->id,
                    'label' => $role->name
                ];
            });

            $editmenu = Menu::find($id);

            $menus = Menu::orderBy('order_by','ASC')->get();

            return Inertia::render('Menus/Edit', [
                'roles' => $roles,
                'editmenu' => $editmenu,
                'role' => $editmenu->roles->first() ? $editmenu->roles->first()->id:0,
                'menus' => $menus,
                'status' => session('status'),
            ]);

        }else{

            return redirect()->intended('/dashboard');
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255',
        ]);

        $menu = Menu::find($id);

        $menu = $menu->update([
            'name' => $request->name,
            'slug' => $request->slug,
            'order_by' => $request->order_by,
            'menu_method' => $request->menu_method,
            'menu_icon' => $request->menu_icon
        ]);


        $menu = Menu::find($id);
        $menu->roles()->sync($request->role);
        event(new Registered($menu));

        return redirect()->intended('/menus');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $menu = Menu::find($id)->delete();
        return redirect()->intended('/menus');
    }
}
