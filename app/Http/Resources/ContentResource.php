<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;
use URL;

class ContentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'content_name' => $this->content_name,
            'content_description' => $this->content_description,
            'content_type' => $this->content_type,
            'is_active' => $this->is_active,
            'is_approved' => $this->is_approved,
            'is_ad_active' => $this->is_ad_active,
            'feature_banner' => $this->feature_banner,
            'mobile_logo' => $this->mobile_logo,
            'mobile_thumbnail' => $this->mobile_thumbnail,
            'web_logo' => $this->web_logo,
            'web_thumbnail' => $this->web_thumbnail,
            'stb_logo' => $this->stb_logo,
            'stb_thumbnail' => $this->stb_thumbnail,
            'share_url' => $this->share_url,
            'is_trailer_available' => $this->is_trailer_available,
            'trailer_url' => $this->trailer_url,
            'url_type' => $this->url_type,
            'content_expire_time' => $this->content_expire_time,
            'content_publish_time' => $this->content_publish_time,
            'is_premium' => $this->is_premium,
            'is_purchased' => $this->is_purchased,
            'price' => $this->price,
            'content_size_in_mb' => $this->content_size_in_mb,
            'is_deleted' => $this->is_deleted,
            'deleted_date_time' => $this->deleted_date_time,
            'is_transcoded' => $this->is_transcoded,
            'transcoding_start_time' => $this->transcoding_start_time,
            'transcoding_end_time' => $this->transcoding_end_time,
            'allowed_region' => $this->allowed_region,
            'allowed_county' => $this->allowed_county,
            'duration' => $this->duration,
            'tags' => $this->tags,
            'orientation' => $this->orientation,
            'age_restriction' => $this->age_restriction,
            'share_count' => $this->share_count,
            'view_count' => $this->view_count,
            'category_id' => $this->category_id,
            'category_name' => $this->category_name,
            'sub_category_id' => $this->sub_category_id,
            'sub_category_name' => $this->sub_category_name,
            'content_owner_id' => $this->content_owner_id,
            'content_owner_name' => $this->content_owner_name,
            'content_owner_logo' => $this->content_owner_logo,
            'is_drm_active' => $this->is_drm_active,
            'content_dir' => $this->content_dir,
            'content_file_name' => $this->content_file_name,
            'content_aes_128_hls_url' => $this->content_aes_128_hls_url,
            'content_drm_dash_url' => $this->content_drm_dash_url,
            'content_drm_hls_url' => $this->content_drm_hls_url,
            'cdn_gmc_conf' => $this->cdn_gmc_conf,
            'cdn_gotipath_conf' => $this->cdn_gotipath_conf,
            'cdn_nddc_conf' => $this->cdn_nddc_conf,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'edit_url' => Auth::user()->can('edit') ? URL::route('contents.edit', $this->id):null
        ];
    }
}
