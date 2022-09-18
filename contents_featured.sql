-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 18, 2022 at 01:53 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tsports`
--

-- --------------------------------------------------------

--
-- Table structure for table `contents_featured`
--

CREATE TABLE `contents_featured` (
  `id` int(15) NOT NULL,
  `content_id` int(1) DEFAULT 0 COMMENT 'Primary ID of ''contents'' table',
  `content_name` varchar(255) DEFAULT '',
  `content_description` text DEFAULT NULL,
  `featured_position` int(11) DEFAULT 0 COMMENT '1= Landing page feature, 2= Category Page Feature, 3= others page',
  `sort_order` int(11) DEFAULT 0 COMMENT 'Featured contents display sorting',
  `content_type` varchar(50) DEFAULT NULL COMMENT 'VOD/LIVE',
  `is_active` tinyint(1) DEFAULT 0,
  `is_approved` tinyint(1) DEFAULT 0,
  `is_ad_active` tinyint(1) DEFAULT 0,
  `feature_banner` varchar(255) DEFAULT '',
  `mobile_logo` varchar(255) DEFAULT '',
  `mobile_thumbnail` varchar(255) DEFAULT '',
  `web_logo` varchar(255) DEFAULT '',
  `web_thumbnail` varchar(255) DEFAULT '',
  `stb_logo` varchar(255) DEFAULT '',
  `stb_thumbnail` varchar(255) DEFAULT '',
  `share_url` varchar(255) DEFAULT '',
  `is_trailer_available` tinyint(1) DEFAULT 0,
  `trailer_url` varchar(255) DEFAULT '',
  `url_type` int(5) DEFAULT 0,
  `content_expire_time` datetime DEFAULT NULL COMMENT 'content',
  `content_publish_time` datetime DEFAULT NULL,
  `is_premium` tinyint(1) DEFAULT 0 COMMENT '1 = premium, 0 = not premium',
  `is_purchased` tinyint(1) DEFAULT 0,
  `price` decimal(10,2) DEFAULT 0.00,
  `content_size_in_mb` bigint(20) DEFAULT 0,
  `is_deleted` tinyint(1) DEFAULT 0,
  `deleted_date_time` datetime DEFAULT NULL,
  `is_transcoded` int(1) DEFAULT 0,
  `transcoding_start_time` datetime DEFAULT NULL,
  `transcoding_end_time` datetime DEFAULT NULL,
  `allowed_region` varchar(255) DEFAULT NULL,
  `allowed_county` varchar(255) DEFAULT NULL,
  `duration` time DEFAULT NULL,
  `tags` text CHARACTER SET latin1 DEFAULT NULL,
  `orientation` tinyint(1) DEFAULT 0 COMMENT '0 = undefined, 1 = vertical, 2 = horizontal',
  `age_restriction` int(5) DEFAULT 0,
  `share_count` int(50) DEFAULT 0,
  `view_count` int(50) DEFAULT 0,
  `category_id` int(11) DEFAULT 0,
  `category_name` varchar(255) DEFAULT '',
  `sub_category_id` int(11) DEFAULT 0,
  `sub_category_name` varchar(255) DEFAULT '',
  `content_owner_id` int(11) DEFAULT 0,
  `content_owner_name` varchar(255) DEFAULT '',
  `content_owner_logo` varchar(255) DEFAULT '',
  `is_drm_active` tinyint(4) DEFAULT 0,
  `content_dir` varchar(255) DEFAULT '',
  `content_file_name` varchar(255) DEFAULT NULL,
  `content_aes_128_hls_url` varchar(255) DEFAULT '',
  `content_drm_dash_url` varchar(255) DEFAULT '',
  `content_drm_hls_url` varchar(255) DEFAULT '',
  `cdn_gmc_conf` text DEFAULT NULL,
  `cdn_gotipath_conf` text DEFAULT NULL,
  `cdn_nddc_conf` text DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `contents_featured`
--

INSERT INTO `contents_featured` (`id`, `content_id`, `content_name`, `content_description`, `featured_position`, `sort_order`, `content_type`, `is_active`, `is_approved`, `is_ad_active`, `feature_banner`, `mobile_logo`, `mobile_thumbnail`, `web_logo`, `web_thumbnail`, `stb_logo`, `stb_thumbnail`, `share_url`, `is_trailer_available`, `trailer_url`, `url_type`, `content_expire_time`, `content_publish_time`, `is_premium`, `is_purchased`, `price`, `content_size_in_mb`, `is_deleted`, `deleted_date_time`, `is_transcoded`, `transcoding_start_time`, `transcoding_end_time`, `allowed_region`, `allowed_county`, `duration`, `tags`, `orientation`, `age_restriction`, `share_count`, `view_count`, `category_id`, `category_name`, `sub_category_id`, `sub_category_name`, `content_owner_id`, `content_owner_name`, `content_owner_logo`, `is_drm_active`, `content_dir`, `content_file_name`, `content_aes_128_hls_url`, `content_drm_dash_url`, `content_drm_hls_url`, `cdn_gmc_conf`, `cdn_gotipath_conf`, `cdn_nddc_conf`, `created_at`, `updated_at`) VALUES
(1, 1, 'Highlights Bangladesh vs West Indies 2nd Test', 'SGlnaGxpZ2h0cyBCYW4gdnMgV0kgMm5kIFRlc3Q=', 1, 1, 'VOD', 1, 1, 0, 'images/contents/banner/t-sports_banner-7.jpg', 'images/contents/thumbnail/channai-kkr-thumbnail.jpg', 'images/ugc/test/channai-kkr-thumbnail.jpg', 'images/ugc/test/channai-kkr-thumbnail.jpg', 'images/ugc/test/channai-kkr-thumbnail.jpg', 'images/ugc/test/channai-kkr-thumbnail.jpg', 'images/ugc/test/channai-kkr-thumbnail.jpg', '', 0, '', 0, '2022-12-31 23:42:34', '2022-09-06 18:08:49', 0, 0, '0.00', 0, 0, NULL, 1, '2022-09-10 16:43:00', '2022-09-10 16:43:00', NULL, NULL, '00:22:00', 'Sports | Highlights', 2, 0, 2, 20, 1, '', 0, '', 1, 'T Sports', '', 0, '755be4dc75442524af76eb9a12b9bf7f', 'Highlights_Bangladesh_vs_West_Indies_2nd_Test_Match_Day_1_T_Sports.mp4', 'https://vod.tsports.com/cdn/vod/755be4dc75442524af76eb9a12b9bf7f/playlist.m3u8', '', '', '{\n	\"isActive\": 0,\n	\"cdnName\": \"Google-Media-CDN\",\n	\"signingType\": \"SIGNED_COOKIE\",\n	\"keyName\": \"First-Key\",\n	\"privateKey\": \"Z2ZlSr+B43rr4LbD7643cxQMw+lq3ZvEdtT10t+Cm40=\",\n	\"expireTimeInMinutes\": 20\n}', '{\n	\"isActive\": 0,\n	\"cdnName\": \"Gotipath\",\n	\"signingType\": \"SIGNED_COOKIE\",\n	\"privateKey\": \"Z2ZlSr+B43rr4LbD7643cxQMw+lq3ZvEdtT10t+Cm40=\",\n	\"expireTimeInMinutes\": 20\n}', '{\n	\"isActive\": 1,\n	\"cdnName\": \"NDDC\",\n	\"signingType\": \"SIGNED_COOKIE\",\n	\"privateKey\": \"Z2ZlSr+B43rr4LbD7643cxQMw+lq3ZvEdtT10t+Cm40=\",\n	\"expireTimeInMinutes\": 20\n}', '2022-09-06 18:08:49', '2022-09-07 18:08:53'),
(2, 2, 'Highlights Bangladesh vs West Indies 1st ODI\r\n', 'SGlnaGxpZ2h0cyBCYW5nbGFkZXNoIHZzIFdlc3QgSW5kaWVzIDFzdCBPREk=', 1, 2, 'VOD', 1, 1, 0, 'images/contents/banner/banner-4.jpg', 'images/contents/thumbnail/Thumbnail-1.jpg', 'images/contents/thumbnail/Thumbnail-1.jpg', 'images/contents/thumbnail/Thumbnail-1.jpg', 'images/contents/thumbnail/Thumbnail-1.jpg', 'images/contents/thumbnail/Thumbnail-1.jpg', 'images/contents/thumbnail/Thumbnail-1.jpg', '', 0, '', 0, '2022-12-31 23:42:34', '2022-09-06 18:08:49', 0, 0, '0.00', 0, 0, NULL, 1, '2022-09-10 16:58:26', '2022-09-10 16:58:26', NULL, NULL, '00:25:00', 'Sports | Highlights', 2, 0, 3, 11, 0, '', 0, '', 1, 'T Sports', '', 0, '5cc50c2a7334dc23866c89205cde49c0', 'Highlights_Bangladesh_vs_West_Indies_1st_ODI_T-Sports.mp4', 'https://vod.tsports.com/cdn/vod/5cc50c2a7334dc23866c89205cde49c0/playlist.m3u8', '', '', '{\n	\"isActive\": 0,\n	\"cdnName\": \"Google-Media-CDN\",\n	\"signingType\": \"SIGNED_COOKIE\",\n	\"keyName\": \"First-Key\",\n	\"privateKey\": \"Z2ZlSr+B43rr4LbD7643cxQMw+lq3ZvEdtT10t+Cm40=\",\n	\"expireTimeInMinutes\": 20\n}', '{\n	\"isActive\": 0,\n	\"cdnName\": \"Gotipath\",\n	\"signingType\": \"SIGNED_COOKIE\",\n	\"privateKey\": \"Z2ZlSr+B43rr4LbD7643cxQMw+lq3ZvEdtT10t+Cm40=\",\n	\"expireTimeInMinutes\": 20\n}', '{\n	\"isActive\": 1,\n	\"cdnName\": \"NDDC\",\n	\"signingType\": \"SIGNED_COOKIE\",\n	\"privateKey\": \"Z2ZlSr+B43rr4LbD7643cxQMw+lq3ZvEdtT10t+Cm40=\",\n	\"expireTimeInMinutes\": 20\n}', '2022-09-06 18:08:49', '2022-09-07 18:08:53'),
(3, 3, 'Highlights Bangladesh vs West Indies 3rd ODI\r\n', 'SGlnaGxpZ2h0cyBCYW5nbGFkZXNoIHZzIFdlc3QgSW5kaWVzIDNyZCBPREk=', 1, 3, 'VOD', 1, 1, 0, 'images/contents/banner/banner-3.jpg', 'images/contents/thumbnail/Thumbnail-2.jpg', 'images/contents/thumbnail/Thumbnail-2.jpg', 'images/contents/thumbnail/Thumbnail-2.jpg', 'images/contents/thumbnail/Thumbnail-2.jpg', 'images/contents/thumbnail/Thumbnail-2.jpg', 'images/contents/thumbnail/Thumbnail-2.jpg', '', 0, '', 0, '2022-12-31 23:42:34', '2022-09-06 18:08:49', 0, 0, '0.00', 0, 0, NULL, 1, '2022-09-10 17:14:25', '2022-09-10 17:14:25', NULL, NULL, '00:20:00', 'Sports | Highlights', 2, 0, 4, 100, 0, '', 0, '', 1, 'T Sports', '', 0, 'e0dbec94dea105e849a2cdac308d2c41', 'Highlights_Bangladesh_vs_West_Indies_3rd_ODI_T_Sports.mp4', 'https://vod.tsports.com/cdn/vod/e0dbec94dea105e849a2cdac308d2c41/playlist.m3u8', '', '', '{\n	\"isActive\": 0,\n	\"cdnName\": \"Google-Media-CDN\",\n	\"signingType\": \"SIGNED_COOKIE\",\n	\"keyName\": \"First-Key\",\n	\"privateKey\": \"Z2ZlSr+B43rr4LbD7643cxQMw+lq3ZvEdtT10t+Cm40=\",\n	\"expireTimeInMinutes\": 20\n}', '{\n	\"isActive\": 0,\n	\"cdnName\": \"Gotipath\",\n	\"signingType\": \"SIGNED_COOKIE\",\n	\"privateKey\": \"Z2ZlSr+B43rr4LbD7643cxQMw+lq3ZvEdtT10t+Cm40=\",\n	\"expireTimeInMinutes\": 20\n}', '{\n	\"isActive\": 1,\n	\"cdnName\": \"NDDC\",\n	\"signingType\": \"SIGNED_COOKIE\",\n	\"privateKey\": \"Z2ZlSr+B43rr4LbD7643cxQMw+lq3ZvEdtT10t+Cm40=\",\n	\"expireTimeInMinutes\": 20\n}', '2022-09-06 18:08:49', '2022-09-07 18:08:53'),
(4, 4, 'Highlights Bangladesh vs Zimbabue 2nd ODI\r\n', 'SGlnaGxpZ2h0cyBCYW5nbGFkZXNoIHZzIFppbWJhYnVlIDJuZCBPREk=', 1, 4, 'VOD', 1, 1, 0, 'images/contents/banner/banner-7.jpg', 'images/contents/thumbnail/Thumbnail-3.jpg', 'images/contents/thumbnail/Thumbnail-3.jpg', 'images/contents/thumbnail/Thumbnail-3.jpg', 'images/contents/thumbnail/Thumbnail-3.jpg', 'images/contents/thumbnail/Thumbnail-3.jpg', 'images/contents/thumbnail/Thumbnail-3.jpg', '', 0, '', 0, '2022-12-31 23:42:34', '2022-09-06 18:08:49', 0, 0, '0.00', 0, 0, NULL, 1, '2022-09-10 17:30:14', '2022-09-10 17:30:14', NULL, NULL, '00:26:00', 'Sports | Highlights', 2, 0, 6, 213, 0, '', 0, '', 1, 'T Sports', '', 0, '093488a927f376cf8ca7c3c055605b90', 'Highlights_Bangladesh_vs_Zimbabwe_2nd_ODI_T_Sports.mp4', 'https://vod.tsports.com/cdn/vod/093488a927f376cf8ca7c3c055605b90/playlist.m3u8', '', '', '{\n	\"isActive\": 0,\n	\"cdnName\": \"Google-Media-CDN\",\n	\"signingType\": \"SIGNED_COOKIE\",\n	\"keyName\": \"First-Key\",\n	\"privateKey\": \"Z2ZlSr+B43rr4LbD7643cxQMw+lq3ZvEdtT10t+Cm40=\",\n	\"expireTimeInMinutes\": 20\n}', '{\n	\"isActive\": 0,\n	\"cdnName\": \"Gotipath\",\n	\"signingType\": \"SIGNED_COOKIE\",\n	\"privateKey\": \"Z2ZlSr+B43rr4LbD7643cxQMw+lq3ZvEdtT10t+Cm40=\",\n	\"expireTimeInMinutes\": 20\n}', '{\n	\"isActive\": 1,\n	\"cdnName\": \"NDDC\",\n	\"signingType\": \"SIGNED_COOKIE\",\n	\"privateKey\": \"Z2ZlSr+B43rr4LbD7643cxQMw+lq3ZvEdtT10t+Cm40=\",\n	\"expireTimeInMinutes\": 20\n}', '2022-09-06 18:08:49', '2022-09-07 18:08:53'),
(5, 5, 'Highlights England vs Nederland 3rd ODI\r\n', 'SGlnaGxpZ2h0cyBFbmdsYW5kIHZzIE5lZGVybGFuZCAzcmQgT0RJ', 1, 5, 'VOD', 1, 1, 0, 'images/contents/banner/banner-6.jpg', 'images/contents/thumbnail/Thumbnail-4.jpg', 'images/contents/thumbnail/Thumbnail-4.jpg', 'images/contents/thumbnail/Thumbnail-4.jpg', 'images/contents/thumbnail/Thumbnail-4.jpg', 'images/contents/thumbnail/Thumbnail-4.jpg', 'images/contents/thumbnail/Thumbnail-4.jpg', '', 0, '', 0, '2022-12-31 23:42:34', '2022-09-06 18:08:49', 0, 0, '0.00', 0, 0, NULL, 1, '2022-09-10 17:48:31', '2022-09-10 17:48:31', NULL, NULL, '00:20:00', 'Sports | Highlights', 2, 0, 3, 22, 0, '', 0, '', 1, 'T Sports', '', 0, '2a496f8ad2459d11c68e93a51a8e0623', 'Highlights_England_vs_Nederland_3rd_ODI_Cricket_TSports.mp4', 'https://vod.tsports.com/cdn/vod/2a496f8ad2459d11c68e93a51a8e0623/playlist.m3u8', '', '', '{\n	\"isActive\": 0,\n	\"cdnName\": \"Google-Media-CDN\",\n	\"signingType\": \"SIGNED_COOKIE\",\n	\"keyName\": \"First-Key\",\n	\"privateKey\": \"Z2ZlSr+B43rr4LbD7643cxQMw+lq3ZvEdtT10t+Cm40=\",\n	\"expireTimeInMinutes\": 20\n}', '{\n	\"isActive\": 0,\n	\"cdnName\": \"Gotipath\",\n	\"signingType\": \"SIGNED_COOKIE\",\n	\"privateKey\": \"Z2ZlSr+B43rr4LbD7643cxQMw+lq3ZvEdtT10t+Cm40=\",\n	\"expireTimeInMinutes\": 20\n}', '{\n	\"isActive\": 1,\n	\"cdnName\": \"NDDC\",\n	\"signingType\": \"SIGNED_COOKIE\",\n	\"privateKey\": \"Z2ZlSr+B43rr4LbD7643cxQMw+lq3ZvEdtT10t+Cm40=\",\n	\"expireTimeInMinutes\": 20\n}', '2022-09-06 18:08:49', '2022-09-07 18:08:53'),
(6, 6, 'Highlights West Indies vs New Zealand 1st ODI\r\n', 'V2VzdCBJbmRpZXMgdnMgTmV3IFplYWxhbmQgMXN0IE9ESQ==', 2, 1, 'VOD', 1, 1, 0, 'images/contents/banner/banner-5.jpg', 'images/contents/thumbnail/Thumbnail-5.jpg', 'images/contents/thumbnail/Thumbnail-5.jpg', 'images/contents/thumbnail/Thumbnail-5.jpg', 'images/contents/thumbnail/Thumbnail-5.jpg', 'images/contents/thumbnail/Thumbnail-5.jpg', 'images/contents/thumbnail/Thumbnail-5.jpg', '', 0, '', 0, '2022-12-31 23:42:34', '2022-09-06 18:08:49', 0, 0, '0.00', 0, 0, NULL, 1, '2022-09-10 18:04:32', '2022-09-10 18:04:32', NULL, NULL, '00:23:00', 'Sports | Highlights', 2, 0, 6, 233, 0, '', 0, '', 1, 'T Sports', '', 0, '13b57d055d693ac964793026f4d473d2', 'Highlights_West_Indies_vs_New_Zealand_1st_ODI_2022_TSports.mp4', 'https://vod.tsports.com/cdn/vod/13b57d055d693ac964793026f4d473d2/playlist.m3u8', '', '', '{\n	\"isActive\": 0,\n	\"cdnName\": \"Google-Media-CDN\",\n	\"signingType\": \"SIGNED_COOKIE\",\n	\"keyName\": \"First-Key\",\n	\"privateKey\": \"Z2ZlSr+B43rr4LbD7643cxQMw+lq3ZvEdtT10t+Cm40=\",\n	\"expireTimeInMinutes\": 20\n}', '{\n	\"isActive\": 0,\n	\"cdnName\": \"Gotipath\",\n	\"signingType\": \"SIGNED_COOKIE\",\n	\"privateKey\": \"Z2ZlSr+B43rr4LbD7643cxQMw+lq3ZvEdtT10t+Cm40=\",\n	\"expireTimeInMinutes\": 20\n}', '{\n	\"isActive\": 1,\n	\"cdnName\": \"NDDC\",\n	\"signingType\": \"SIGNED_COOKIE\",\n	\"privateKey\": \"Z2ZlSr+B43rr4LbD7643cxQMw+lq3ZvEdtT10t+Cm40=\",\n	\"expireTimeInMinutes\": 20\n}', '2022-09-06 18:08:49', '2022-09-07 18:08:53'),
(7, 7, 'Highlights Zimbabwe vs Afghanistan 3rd T20I\r\n', 'SGlnaGxpZ2h0cyAgWmltYmFid2UgdnMgQWZnaGFuaXN0YW4gM3JkIFQyMEk=', 2, 2, 'VOD', 1, 1, 0, 'images/contents/banner/banner-4.jpg', 'images/contents/thumbnail/Thumbnail-6.jpg', 'images/contents/thumbnail/Thumbnail-6.jpg', 'images/contents/thumbnail/Thumbnail-6.jpg', 'images/contents/thumbnail/Thumbnail-6.jpg', 'images/contents/thumbnail/Thumbnail-6.jpg', 'images/contents/thumbnail/Thumbnail-6.jpg', '', 0, '', 0, '2022-12-31 23:42:34', '2022-09-06 18:08:49', 0, 0, '0.00', 0, 0, NULL, 1, '2022-09-10 18:21:03', '2022-09-10 18:21:03', NULL, NULL, '00:20:00', 'Sports | Highlights', 2, 0, 8, 555, 0, '', 0, '', 1, 'T Sports', '', 0, '2431a813caeee9af54af09da409291b0', 'Highlights_Zimbabwe_vs_Afghanistan_3rd_T20I_TSports.mp4', 'https://vod.tsports.com/cdn/vod/2431a813caeee9af54af09da409291b0/playlist.m3u8', '', '', '{\n	\"isActive\": 0,\n	\"cdnName\": \"Google-Media-CDN\",\n	\"signingType\": \"SIGNED_COOKIE\",\n	\"keyName\": \"First-Key\",\n	\"privateKey\": \"Z2ZlSr+B43rr4LbD7643cxQMw+lq3ZvEdtT10t+Cm40=\",\n	\"expireTimeInMinutes\": 20\n}', '{\n	\"isActive\": 0,\n	\"cdnName\": \"Gotipath\",\n	\"signingType\": \"SIGNED_COOKIE\",\n	\"privateKey\": \"Z2ZlSr+B43rr4LbD7643cxQMw+lq3ZvEdtT10t+Cm40=\",\n	\"expireTimeInMinutes\": 20\n}', '{\n	\"isActive\": 1,\n	\"cdnName\": \"NDDC\",\n	\"signingType\": \"SIGNED_COOKIE\",\n	\"privateKey\": \"Z2ZlSr+B43rr4LbD7643cxQMw+lq3ZvEdtT10t+Cm40=\",\n	\"expireTimeInMinutes\": 20\n}', '2022-09-06 18:08:49', '2022-09-07 18:08:53'),
(8, 8, 'Highlights India vs WI 2nd ODI\r\n', 'SGlnaGxpZ2h0cyBJbmRpYSB2cyBXSSAybmQgT0RJ', 2, 3, 'VOD', 1, 1, 0, 'images/contents/banner/banner-3.jpg', 'images/contents/thumbnail/Thumbnail-7.jpg', 'images/contents/thumbnail/Thumbnail-7.jpg', 'images/contents/thumbnail/Thumbnail-7.jpg', 'images/contents/thumbnail/Thumbnail-7.jpg', 'images/contents/thumbnail/Thumbnail-7.jpg', 'images/contents/thumbnail/Thumbnail-7.jpg', '', 0, '', 0, '2022-12-31 23:42:34', '2022-09-06 18:08:49', 0, 0, '0.00', 0, 0, NULL, 1, '2022-09-10 18:34:31', '2022-09-10 18:34:31', NULL, NULL, '00:20:00', 'Sports | Highlights', 2, 0, 3, 55, 0, '', 0, '', 1, 'T Sports', '', 0, '0c26cbea5298bd165323b4eac95eeb9a', 'Highlights_India_vs_West_Indies_2nd_ODI_TSports.mp4', 'https://vod.tsports.com/cdn/vod/0c26cbea5298bd165323b4eac95eeb9a/playlist.m3u8', '', '', '{\n	\"isActive\": 0,\n	\"cdnName\": \"Google-Media-CDN\",\n	\"signingType\": \"SIGNED_COOKIE\",\n	\"keyName\": \"First-Key\",\n	\"privateKey\": \"Z2ZlSr+B43rr4LbD7643cxQMw+lq3ZvEdtT10t+Cm40=\",\n	\"expireTimeInMinutes\": 20\n}', '{\n	\"isActive\": 0,\n	\"cdnName\": \"Gotipath\",\n	\"signingType\": \"SIGNED_COOKIE\",\n	\"privateKey\": \"Z2ZlSr+B43rr4LbD7643cxQMw+lq3ZvEdtT10t+Cm40=\",\n	\"expireTimeInMinutes\": 20\n}', '{\n	\"isActive\": 1,\n	\"cdnName\": \"NDDC\",\n	\"signingType\": \"SIGNED_COOKIE\",\n	\"privateKey\": \"Z2ZlSr+B43rr4LbD7643cxQMw+lq3ZvEdtT10t+Cm40=\",\n	\"expireTimeInMinutes\": 20\n}', '2022-09-06 18:08:49', '2022-09-07 18:08:53'),
(9, 9, 'Highlights Ireland vs Afganistan 5th T20\r\n', 'SGlnaGxpZ2h0cyBJcmVsYW5kIHZzIEFmZ2FuaXN0YW4gNXRoIFQyMA==', 2, 4, 'VOD', 1, 1, 0, 'images/contents/banner/banner-2.jpg', 'images/contents/thumbnail/Thumbnail-8.jpg', 'images/contents/thumbnail/Thumbnail-8.jpg', 'images/contents/thumbnail/Thumbnail-8.jpg', 'images/contents/thumbnail/Thumbnail-8.jpg', 'images/contents/thumbnail/Thumbnail-8.jpg', 'images/contents/thumbnail/Thumbnail-8.jpg', '', 0, '', 0, '2022-12-31 23:42:34', '2022-09-06 18:08:49', 0, 0, '0.00', 0, 0, NULL, 1, '2022-09-10 18:50:34', '2022-09-10 18:50:34', NULL, NULL, '00:27:00', 'Sports | Highlights', 2, 0, 4, 145, 0, '', 0, '', 1, 'T Sports', '', 0, '91385697a7f0e373d8aeb7c086813d98', 'Highlights_Ireland_vs_Afghanistan_5thT20I_TSports.mp4', 'https://vod.tsports.com/cdn/vod/91385697a7f0e373d8aeb7c086813d98/playlist.m3u8', '', '', '{\n	\"isActive\": 0,\n	\"cdnName\": \"Google-Media-CDN\",\n	\"signingType\": \"SIGNED_COOKIE\",\n	\"keyName\": \"First-Key\",\n	\"privateKey\": \"Z2ZlSr+B43rr4LbD7643cxQMw+lq3ZvEdtT10t+Cm40=\",\n	\"expireTimeInMinutes\": 20\n}', '{\n	\"isActive\": 0,\n	\"cdnName\": \"Gotipath\",\n	\"signingType\": \"SIGNED_COOKIE\",\n	\"privateKey\": \"Z2ZlSr+B43rr4LbD7643cxQMw+lq3ZvEdtT10t+Cm40=\",\n	\"expireTimeInMinutes\": 20\n}', '{\n	\"isActive\": 1,\n	\"cdnName\": \"NDDC\",\n	\"signingType\": \"SIGNED_COOKIE\",\n	\"privateKey\": \"Z2ZlSr+B43rr4LbD7643cxQMw+lq3ZvEdtT10t+Cm40=\",\n	\"expireTimeInMinutes\": 20\n}', '2022-09-06 18:08:49', '2022-09-07 18:08:53'),
(10, 10, 'Highlights Nederland vs Pakistan 3rd ODI\r\n', 'SGlnaGxpZ2h0cyBOZWRlcmxhbmQgdnMgUGFraXN0YW4gM3JkIE9ESQ==', 2, 5, 'VOD', 1, 1, 0, 'images/contents/banner/channai-kkr-banner.jpg', 'images/contents/thumbnail/Thumbnail-9.jpg', 'images/contents/thumbnail/Thumbnail-9.jpg', 'images/contents/thumbnail/Thumbnail-9.jpg', 'images/contents/thumbnail/Thumbnail-9.jpg', 'images/contents/thumbnail/Thumbnail-9.jpg', 'images/contents/thumbnail/Thumbnail-9.jpg', '', 0, '', 0, '2022-12-31 23:42:34', '2022-09-06 18:08:49', 0, 0, '0.00', 0, 0, NULL, 1, '2022-09-10 18:59:08', '2022-09-10 18:59:08', NULL, NULL, '00:20:00', 'Sports | Highlights', 2, 0, 9, 123, 0, '', 0, '', 1, 'T Sports', '', 0, '787dc8f447d4da177c083beb8b80721b', 'Highlights_Netherlands_vs_Pakistan_3rd_ODI_2022_TSports.mp4', 'https://vod.tsports.com/cdn/vod/787dc8f447d4da177c083beb8b80721b/playlist.m3u8', '', '', '{\n	\"isActive\": 0,\n	\"cdnName\": \"Google-Media-CDN\",\n	\"signingType\": \"SIGNED_COOKIE\",\n	\"keyName\": \"First-Key\",\n	\"privateKey\": \"Z2ZlSr+B43rr4LbD7643cxQMw+lq3ZvEdtT10t+Cm40=\",\n	\"expireTimeInMinutes\": 20\n}', '{\n	\"isActive\": 0,\n	\"cdnName\": \"Gotipath\",\n	\"signingType\": \"SIGNED_COOKIE\",\n	\"privateKey\": \"Z2ZlSr+B43rr4LbD7643cxQMw+lq3ZvEdtT10t+Cm40=\",\n	\"expireTimeInMinutes\": 20\n}', '{\n	\"isActive\": 1,\n	\"cdnName\": \"NDDC\",\n	\"signingType\": \"SIGNED_COOKIE\",\n	\"privateKey\": \"Z2ZlSr+B43rr4LbD7643cxQMw+lq3ZvEdtT10t+Cm40=\",\n	\"expireTimeInMinutes\": 20\n}', '2022-09-06 18:08:49', '2022-09-07 18:08:53');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contents_featured`
--
ALTER TABLE `contents_featured`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contents_featured`
--
ALTER TABLE `contents_featured`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
