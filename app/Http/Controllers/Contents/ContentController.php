<?php

namespace App\Http\Controllers\Contents;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Auth\Events\Registered;
use App\Http\Resources\ContentResource;
use App\Models\Content;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Models\Role;
use App\Models\User;
use App\Models\Category;
use App\Models\SubCategory;
use Carbon\Carbon;

class ContentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if(Auth::user()->can(['edit']) || Auth::user()->can(['read'])){

            $contents = ContentResource::collection(Content::all());

            return Inertia::render('Contents/Contents', [
                'contents' => $contents,
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
        if(Auth::user()->can(['create'])){

            $roles = Role::all()->map(function ($role) {
                return [
                    'value' => $role->id,
                    'label' => $role->name
                ];
            });

            $categories = Category::with('subCategories')->orderBy('sort_order','ASC')->get();

            $subcategories = SubCategory::orderBy('category_id', 'ASC')->orderBy('sort_order','ASC')->get();

            return Inertia::render('Contents/Create', [
                'roles' => $roles,
                'categories' => $categories,
                'subcategories' => $subcategories,
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
            'content_name' => 'required|string',
            'content_description' => 'required|string',
            'content_type' => 'required|string',
            'feature_banner' => 'required|image|mimes:jpeg,jpg,png,gif,svg|max:2048'
        ]);

        $feature_banner = '';
        $mobile_logo = '';
        $web_thumbnail = '';
        $web_logo = '';
        $mobile_thumbnail = '';
        $stb_logo = '';
        $stb_thumbnail = '';

        if ($request->hasFile('feature_banner')) {

            $feature_banner = $request->file('feature_banner')->store('images/contents/feature_banner', 'public');
        }

        if ($request->hasFile('mobile_logo')) {

            $mobile_logo = $request->file('mobile_logo')->store('images/contents/mobile_logo', 'public');
        }

        if ($request->hasFile('mobile_thumbnail')) {

            $mobile_thumbnail = $request->file('mobile_thumbnail')->store('images/contents/mobile_thumbnail', 'public');
        }

        if ($request->hasFile('web_logo')) {

            $web_logo = $request->file('web_logo')->store('images/contents/web_logo', 'public');
        }

        if ($request->hasFile('web_thumbnail')) {

            $web_thumbnail = $request->file('web_thumbnail')->store('images/contents/web_thumbnail', 'public');
        }

        if ($request->hasFile('stb_logo')) {

            $stb_logo = $request->file('stb_logo')->store('images/contents/stb_logo', 'public');
        }

        if ($request->hasFile('stb_thumbnail')) {

            $stb_thumbnail = $request->file('stb_thumbnail')->store('images/contents/stb_thumbnail', 'public');
        }

        //dd($request->all());

        $content = Content::create([
            'content_name' => $request->content_name,
            'content_description' => $request->content_description,
            'content_type' => $request->content_type,
            'feature_banner' => $feature_banner,
            'mobile_logo' => $mobile_logo,
            'mobile_thumbnail' => $mobile_thumbnail,
            'web_logo' => $web_logo,
            'web_thumbnail' => $web_thumbnail,
            'stb_logo' => $stb_logo,
            'stb_thumbnail' => $stb_thumbnail,
            'is_active' => $request->is_active,
            'is_approved' => $request->is_approved,
            'is_ad_active' => $request->is_ad_active,
            'category_id' => $request->category,
            'category_name' => $request->category_name,
            'sub_category_id' => $request->sub_category,
            'sub_category_name' => $request->sub_category_name,
            'content_expire_time' => date('Y-m-d H:i:s', strtotime($request->content_expire_time)),
            'content_publish_time' => date('Y-m-d H:i:s', strtotime($request->content_publish_time)),
            'is_premium' => $request->is_premium,
            'is_purchased' => $request->is_purchased,
            'age_restriction' => $request->age_restriction,
            'share_url' => $request->share_url,
            'is_trailer_available' => $request->is_trailer_available,
            'trailer_url' => $request->trailer_url,
            'orientation' => $request->orientation,
            'content_file_name' => $request->content_file_name,
            'content_aes_128_hls_url' => $request->content_aes_128_hls_url,
            'content_drm_dash_url' => $request->content_drm_dash_url,
            'content_drm_hls_url' => $request->content_drm_hls_url

        ]);

        $lastid = $content->id;
        $content->content_dir = md5($lastid.Carbon::now());
        $content->save();

        event(new Registered($content));

        return redirect('contents');
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
        if(Auth::user()->can(['edit'])){

            $content = Content::find($id);

            $roles = Role::all()->map(function ($role) {
                return [
                    'value' => $role->id,
                    'label' => $role->name
                ];
            });

            $categories = Category::with('subCategories')->orderBy('sort_order','ASC')->get();

            $subcategories = SubCategory::orderBy('category_id', 'ASC')->orderBy('sort_order','ASC')->get();

            return Inertia::render('Contents/Edit', [
                'content' => $content,
                'roles' => $roles,
                'categories' => $categories,
                'subcategories' => $subcategories,
                'status' => session('status'),
            ]);

        }else{

            return redirect()->intended('/contents');
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
        if(Auth::user()->can(['edit'])){
            $content = Content::find($id);
            $request->validate([
                'content_name' => 'required|string',
                'content_description' => 'required|string',
                'content_type' => 'required|string',
                //'feature_banner' => 'required|image|mimes:jpeg,jpg,png,gif,svg|max:2048'
            ]);

            $feature_banner = '';
            $mobile_logo = '';
            $web_thumbnail = '';
            $web_logo = '';
            $mobile_thumbnail = '';
            $stb_logo = '';
            $stb_thumbnail = '';

            if ($request->hasFile('feature_banner')) {

                $feature_banner = $request->file('feature_banner')->store('images/contents/feature_banner', 'public');

            }else{

               $feature_banner = $content->feature_banner;
            }

            if ($request->hasFile('mobile_logo')) {

                $mobile_logo = $request->file('mobile_logo')->store('images/contents/mobile_logo', 'public');
            
            }else{

                $mobile_logo = $content->mobile_logo;
            }

            if ($request->hasFile('mobile_thumbnail')) {

                $mobile_thumbnail = $request->file('mobile_thumbnail')->store('images/contents/mobile_thumbnail', 'public');
            }else{

               $mobile_thumbnail = $content->mobile_thumbnail; 
            }

            if ($request->hasFile('web_logo')) {

                $web_logo = $request->file('web_logo')->store('images/contents/web_logo', 'public');

            }else{

                $web_logo = $content->web_logo;
            }

            if ($request->hasFile('web_thumbnail')) {

                $web_thumbnail = $request->file('web_thumbnail')->store('images/contents/web_thumbnail', 'public');

            }else{

                $web_thumbnail = $content->web_thumbnail;
            }

            if ($request->hasFile('stb_logo')) {

                $stb_logo = $request->file('stb_logo')->store('images/contents/stb_logo', 'public');

            }else{

                $stb_logo = $content->stb_logo;
            }

            if ($request->hasFile('stb_thumbnail')) {

                $stb_thumbnail = $request->file('stb_thumbnail')->store('images/contents/stb_thumbnail', 'public');

            }else{

                $stb_thumbnail = $content->stb_thumbnail;
            }

            

            $content = $content->update([
                'content_name' => $request->content_name,
                'content_description' => $request->content_description,
                'content_type' => $request->content_type,
                'feature_banner' => $feature_banner,
                'mobile_logo' => $mobile_logo,
                'mobile_thumbnail' => $mobile_thumbnail,
                'web_logo' => $web_logo,
                'web_thumbnail' => $web_thumbnail,
                'stb_logo' => $stb_logo,
                'stb_thumbnail' => $stb_thumbnail,
                'is_active' => $request->is_active,
                'is_approved' => $request->is_approved,
                'is_ad_active' => $request->is_ad_active,
                'category_id' => $request->category,
                'category_name' => $request->category_name,
                'sub_category_id' => $request->sub_category,
                'sub_category_name' => $request->sub_category_name,
                'content_expire_time' => date('Y-m-d H:i:s', strtotime($request->content_expire_time)),
                'content_publish_time' => date('Y-m-d H:i:s', strtotime($request->content_publish_time)),
                'is_premium' => $request->is_premium,
                'is_purchased' => $request->is_purchased,
                'age_restriction' => $request->age_restriction,
                'share_url' => $request->share_url,
                'is_trailer_available' => $request->is_trailer_available,
                'trailer_url' => $request->trailer_url,
                'orientation' => $request->orientation,
                'content_file_name' => $request->content_file_name,
                'content_aes_128_hls_url' => $request->content_aes_128_hls_url,
                'content_drm_dash_url' => $request->content_drm_dash_url,
                'content_drm_hls_url' => $request->content_drm_hls_url

            ]);

            return redirect('contents');

        }else{

            return redirect()->intended('/contents'); 
        }


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $content = Content::find($id)->delete();
        return redirect('contents'); 
    }
}
