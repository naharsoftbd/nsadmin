<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('menus')->insert([
            [
            'name' => 'Home',
            'slug' => 'dashboard',
            'menu_method' => 'get',
            'menu_icon' => "fa-solid:home",
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
            ],
            [
            'name' => 'Menus',
            'slug' => 'menus',
            'menu_method' => 'get',
            'menu_icon' => 'ant-design:menu-outlined',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
            ],
            [
            'name' => 'Users',
            'slug' => '',
            'menu_method' => '',
            'menu_icon' => 'fa-solid:users',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
            ],
            [
            'name' => 'Roles',
            'slug' => '',
            'menu_method' => '',
            'menu_icon' => 'fa-solid:users',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
            ],
            [
            'name' => 'Orders',
            'slug' => '',
            'menu_method' => '',
            'menu_icon' => 'fa-solid:shopping-cart',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
            ],
            [
            'name' => 'Settings',
            'slug' => '',
            'menu_method' => '',
            'menu_icon' => 'ant-design:setting-outlined',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
            ],
            [
            'name' => 'Logout',
            'slug' => 'logout',
            'menu_method' => 'post',
            'menu_icon' => 'bx:log-out-circle',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
            ]
            ]);

        DB::table('child_menus')->insert([
            [
            'name' => 'Menus',
            'slug' => 'menus.index',
            'menu_method' => 'get',
            'menu_icon' => "ant-design:menu-outlined",
            'menu_id' => 2,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
            ],
            [
            'name' => 'Create Menu',
            'slug' => 'menus.create',
            'menu_method' => 'get',
            'menu_icon' => "ant-design:menu-outlined",
            'menu_id' => 2,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
            ],
            [
            'name' => 'Users',
            'slug' => 'users',
            'menu_method' => 'get',
            'menu_icon' => "fa-solid:users",
            'menu_id' => 3,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
            ],
            [
            'name' => 'User Create',
            'slug' => 'users.create',
            'menu_method' => 'get',
            'menu_icon' => "fa-solid:users",
            'menu_id' => 3,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
            ],
            [
            'name' => 'Roles',
            'slug' => 'roles.index',
            'menu_method' => 'get',
            'menu_icon' => "fa-solid:users",
            'menu_id' => 4,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now(),
            ],
            [
            'name' => 'Create Role',
            'slug' => 'roles.create',
            'menu_method' => 'get',
            'menu_icon' => "fa-solid:users",
            'menu_id' => 4,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
            ]
        ]);

        DB::table('menu_role')->insert([
            [
                'menu_id' => 1,
                'role_id' => 1,
                'child_menu_id' =>null
            ],
            [
                'menu_id' => 2,
                'role_id' => 1,
                'child_menu_id' =>1
            ],
            [
                'menu_id' => 2,
                'role_id' => 1,
                'child_menu_id' =>2
            ],
            [
                'menu_id' => 3,
                'role_id' => 1,
                'child_menu_id' => 3
            ],
            [
                'menu_id' => 3,
                'role_id' => 1,
                'child_menu_id' => 4
            ],
            [
                'menu_id' => 4,
                'role_id' => 1,
                'child_menu_id' => 5
            ],
            [
                'menu_id' => 4,
                'role_id' => 1,
                'child_menu_id' => 6
            ],
            [
                'menu_id' => 5,
                'role_id' => 1,
                'child_menu_id' =>null
            ],
            [
                'menu_id' => 6,
                'role_id' => 1,
                'child_menu_id' =>null
            ],
            [
                'menu_id' => 7,
                'role_id' => 1,
                'child_menu_id' =>null
            ]
        ]);
    }
}
