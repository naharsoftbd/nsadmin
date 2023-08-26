<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;
use App\Models\Menu;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';
    protected $menus = '';
    protected $token = '';

    /**
     * Determine the current asset version.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request)
    {
        if(Auth::check()){
        $this->menus = Menu::with(['childmenus','roles'])->orderBy('order_by','ASC')->get()->map(function ($format) {
                    return [
                        'id' => $format->id,
                        'name' => $format->name,
                        'slug' => $format->slug,
                        'order_by' => $format->order_by,
                        'menu_method' => $format->menu_method,
                        'menu_icon' => $format->menu_icon,
                        'childmenus' => $format->getChildMenus(),
                        'roles' => $format->roles
                    ];
                });

            $user = User::where('email', Auth::user()->email)->first();
            $this->token = $user->tokens()->get()->pluck('token');
        }

        
        
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
                'is_admin' => $request->user() ? ($request->user()->hasRole('admin') || $request->user()->hasRole('supper_admin')):null,
                'role' => $request->user() ? $request->user()->roles()->get()->first():null,
            ],
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                    'query'=> $request->query()
                ]);
            },
            'menu' => $this->menus,
            'logoUrl' => asset('images/logo.png'),
            'imageUrl' => '',
            'flash' => function () use ($request) {
                return [
                    'success' => $request->session()->get('success'),
                    'error' => $request->session()->get('error'),
                ];
            },
            'token' => $this->token
        ]);
    }
}
