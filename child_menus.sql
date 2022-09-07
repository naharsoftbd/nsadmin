-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 07, 2022 at 01:34 PM
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
-- Table structure for table `child_menus`
--

CREATE TABLE `child_menus` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `menu_method` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `menu_icon` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `menu_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `child_menus`
--

INSERT INTO `child_menus` (`id`, `name`, `slug`, `menu_method`, `menu_icon`, `menu_id`, `created_at`, `updated_at`) VALUES
(1, 'Users', 'users', 'get', 'fa-solid:users', 3, '2022-09-07 04:08:11', '2022-09-07 04:08:11'),
(2, 'User Create', 'users.create', 'get', 'fa-solid:users', 3, '2022-09-07 04:08:11', '2022-09-07 04:08:11'),
(3, 'Roles', 'roles.index', 'get', 'fa-solid:users', 4, '2022-09-07 04:08:11', '2022-09-07 04:08:11'),
(4, 'Create Role', 'roles.create', 'get', 'fa-solid:users', 4, '2022-09-07 04:08:11', '2022-09-07 04:08:11'),
(5, 'Menus', 'menus.index', 'get', 'ant-design:menu-outlined', 2, '2022-09-07 04:08:11', '2022-09-07 04:08:11'),
(6, 'Create Menu', 'menus.create', 'get', 'ant-design:menu-outlined', 2, '2022-09-07 04:08:11', '2022-09-07 04:08:11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `child_menus`
--
ALTER TABLE `child_menus`
  ADD PRIMARY KEY (`id`),
  ADD KEY `child_menus_menu_id_foreign` (`menu_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `child_menus`
--
ALTER TABLE `child_menus`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `child_menus`
--
ALTER TABLE `child_menus`
  ADD CONSTRAINT `child_menus_menu_id_foreign` FOREIGN KEY (`menu_id`) REFERENCES `menus` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
