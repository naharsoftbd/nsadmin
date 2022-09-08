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

            $menus = Menu::all()->map(function ($menu) {
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
            return Inertia::render('Menus/Create', [
                'roles' => $roles,
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

        $menu = Menu::create([
            'name' => $request->name,
            'slug' => $request->slug,
            'order_by' => $request->order_by,
            'menu_method' => $request->menu_method,
            'menu_icon' => $request->menu_icon
        ]);


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

            return Inertia::render('Menus/Edit', [
                'roles' => $roles,
                'editmenu' => $editmenu,
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
