<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('roles')->insert([
            [
            'name' => 'Admin',
            'slug' => 'admin',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
            ],
            [
            'name' => 'Subscriber',
            'slug' => 'subscriber',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
            ]
            ]
        );
        
        DB::table('permissions')->insert([
            [
            'name' => 'Create',
            'slug' => 'create',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
            ],
            [
            'name' => 'Edit',
            'slug' => 'edit',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
            ],
            [
            'name' => 'Read',
            'slug' => 'read',
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
            ]
            ]
        );

        DB::table('roles_permissions')->insert([
            [
            'role_id' => 1,
            'permission_id' => 1
            ],
            [
            'role_id' => 1,
            'permission_id' => 2
            ],
            [
            'role_id' => 1,
            'permission_id' => 3
            ],
            [
            'role_id' => 2,
            'permission_id' => 3
            ]
            ]
        );
    }
}
