-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 07, 2022 at 01:33 PM
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
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `menus`
--

INSERT INTO `menus` (`id`, `name`, `slug`, `menu_method`, `menu_icon`, `created_at`, `updated_at`) VALUES
(1, 'Home', 'dashboard', 'get', 'fa-solid:home', '2022-09-07 04:08:11', '2022-09-07 04:08:11'),
(2, 'Menus', '', '', 'ant-design:menu-outlined', '2022-09-07 04:08:11', '2022-09-07 04:08:11'),
(3, 'Users', '', '', 'fa-solid:users', '2022-09-07 04:08:11', '2022-09-07 04:08:11'),
(4, 'Roles', '', '', 'fa-solid:users', '2022-09-07 04:08:11', '2022-09-07 04:08:11'),
(5, 'Orders', '', '', 'fa-solid:shopping-cart', '2022-09-07 04:08:11', '2022-09-07 04:08:11'),
(6, 'Settings', '', '', 'ant-design:setting-outlined', '2022-09-07 04:08:11', '2022-09-07 04:08:11'),
(7, 'Logout', 'logout', 'post', 'bx:log-out-circle', '2022-09-07 04:08:11', '2022-09-07 04:08:11');

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
