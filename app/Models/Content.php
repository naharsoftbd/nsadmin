<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Content extends Model
{
    use HasFactory;


    protected $fillable = [
            'content_name', 'content_description', 'content_type', 'is_active',
            'is_approved',
            'is_ad_active',
            'feature_banner',
            'mobile_logo',
            'mobile_thumbnail',
            'web_logo',
            'web_thumbnail',
            'stb_logo',
            'stb_thumbnail',
            'share_url',
            'is_trailer_available',
            'trailer_url',
            'url_type',
            'content_expire_time',
            'content_publish_time',
            'is_premium',
            'is_purchased',
            'price',
            'content_size_in_mb',
            'is_deleted',
            'deleted_date_time',
            'is_transcoded',
            'transcoding_start_time',
            'transcoding_end_time',
            'allowed_region',
            'allowed_county',
            'duration',
            'tags',
            'orientation',
            'age_restriction',
            'share_count',
            'view_count',
            'category_id',
            'category_name',
            'sub_category_id',
            'sub_category_name',
            'content_owner_id',
            'content_owner_name',
            'content_owner_logo',
            'is_drm_active',
            'content_dir',
            'content_file_name',
            'content_aes_128_hls_url',
            'content_drm_dash_url' ,
            'content_drm_hls_url',
            'cdn_gmc_conf',
            'cdn_gotipath_conf',
            'cdn_nddc_conf',
            ];
}
