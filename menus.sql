-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 08, 2022 at 11:18 AM
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
-- Table structure for table `menus`
--

CREATE TABLE `menus` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `menu_method` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `menu_icon` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `order_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `menus`
--

INSERT INTO `menus` (`id`, `name`, `slug`, `menu_method`, `menu_icon`, `order_by`, `created_at`, `updated_at`) VALUES
(1, 'Home', 'dashboard', 'get', 'fa-solid:home', 1, '2022-09-06 22:08:11', '2022-09-06 22:08:11'),
(2, 'Menus', '#', NULL, 'ant-design:menu-outlined', 2, '2022-09-06 22:08:11', '2022-09-08 03:10:14'),
(3, 'Users', '#', NULL, 'fa-solid:users', 3, '2022-09-06 22:08:11', '2022-09-08 03:10:58'),
(4, 'Roles', '#', NULL, 'fa-solid:users', 4, '2022-09-06 22:08:11', '2022-09-08 03:11:14'),
(5, 'Orders', '#', NULL, 'fa-solid:shopping-cart', 5, '2022-09-06 22:08:11', '2022-09-08 03:11:29'),
(6, 'Settings', '#', NULL, 'ant-design:setting-outlined', 6, '2022-09-06 22:08:11', '2022-09-08 03:08:22'),
(7, 'Logout', 'logout', 'post', 'bx:log-out-circle', 70, '2022-09-06 22:08:11', '2022-09-07 22:36:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `menus`
--
ALTER TABLE `menus`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
