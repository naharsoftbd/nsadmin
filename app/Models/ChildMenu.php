<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChildMenu extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'order_by',
        'menu_method',
        'menu_icon',
        'menu_id'
    ];
}
