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

        if(Auth::user()->hasRole('admin')){

            $menus = Menu::all()->map(function ($menu) {
                return [
                    'id' => $menu->id,
                    'name' => $menu->name,
                    'slug' => $menu->slug,
                    'created_at' => $menu->created_at,
                    'updated_at' => $menu->updated_at,
                    'edit_url' => URL::route('users.edit', $menu),
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
        if(Auth::user()->hasRole('admin')){

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
        //
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
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
