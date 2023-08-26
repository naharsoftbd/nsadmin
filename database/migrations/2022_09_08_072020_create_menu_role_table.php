<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('menu_role', function (Blueprint $table) {
            $table->unsignedBigInteger('menu_id')->nullable();
            $table->unsignedBigInteger('role_id')->nullable();
            $table->unsignedBigInteger('child_menu_id')->nullable();

           //FOREIGN KEY CONSTRAINTS
           $table->foreign('menu_id')->references('id')->on('menus')->onDelete('cascade');
           $table->foreign('role_id')->references('id')->on('roles')->onDelete('cascade');
           $table->foreign('child_menu_id')->references('id')->on('child_menus')->onDelete('cascade');

           //SETTING THE PRIMARY KEYS
           $table->primary(['menu_id','role_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('menu_role');
    }
};
