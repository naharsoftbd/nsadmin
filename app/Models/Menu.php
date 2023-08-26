<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class Menu extends Model
{
    use HasFactory;


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'slug',
        'order_by',
        'menu_method',
        'menu_icon'
    ];


    public function format(){

        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'order_by' => $this->order_by,
            'menu_method' => $this->menu_method,
            'menu_icon' => $this->menu_icon,
            'childmenus' => $this->getChildMenus()
        ];
    }



    public function childmenus(){
        return $this->hasMany(ChildMenu::class)->orderBy('order_by','ASC');
    }

    public function roles(){
        return $this->belongsToMany(Role::class)->withPivot('child_menu_id');
    }

    public function getChildMenus(){
        $child = DB::table('menu_role')->where('role_id', Auth::user()->roles()->first()->id)->where('menu_id', $this->id)->get()->pluck('child_menu_id')->toArray();
        return ChildMenu::whereIn('id',$child)->orderBy('order_by','ASC')->get();
    }
}
