<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use URL;
use App\Models\Role;
use App\Models\Permission;

class RoleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if(Auth::user()->can(['edit']) || Auth::user()->can(['read'])){

            $role = Role::all()->map(function ($role) {
                return [
                    'id' => $role->id,
                    'name' => $role->name,
                    'slug' => $role->slug,
                    'created_at' => $role->created_at,
                    'updated_at' => $role->updated_at,
                    'edit_url' => Auth::user()->can('edit') ? URL::route('roles.edit', $role):null,
                ];
            });

            return Inertia::render('Users/Roles', [
                'role' => $role,
                'status' => session('status'),
            ]);

        }else{

            return redirect()->intended('/users');
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

            $permissions = Permission::all();
            return Inertia::render('Users/RoleCreate', [
                'permissions' => $permissions,
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
        //dd($request->all());

        $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255',
        ]);

        $role = Role::create([
            'name' => $request->name,
            'slug' => $request->slug,
        ]);

        if($request->create){

            $create_permission = Permission::where('slug', 'create')->first(); 
            $role->permissions()->attach($create_permission); 

        }

        if($request->edit){
            
            $edit_permission = Permission::where('slug', 'edit')->first(); 
            $role->permissions()->attach($edit_permission);

        }

        if($request->read){

            $read_permission = Permission::where('slug', 'read')->first(); 
            $role->permissions()->attach($read_permission);
        }

        

        return redirect('roles');
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

            $role = Role::find($id);

            return Inertia::render('Users/RoleEdit', [
                'role' => $role,
                'permission' => $role->permissions()->get(),
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
        $permission = [];

        $request->validate([
            'name' => 'required|string|max:255',
            'slug' => 'required|string|max:255',
        ]);

        $role = Role::find($id);

        $role = $role->update([
            'name' => $request->name,
            'slug' => $request->slug,
        ]);

        $role = Role::find($id);

        if($request->create){ 
            array_push($permission, 1);
        }

        if($request->edit){
            array_push($permission, 2);
        }

        if($request->read){
            array_push($permission, 3);
        }

        $role->permissions()->sync($permission);

        return redirect('roles');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        
        $role = Role::find($id)->delete();
        return redirect('roles');
    }
}
