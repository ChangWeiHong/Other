-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3308
-- Generation Time: Aug 24, 2020 at 03:48 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `agency_landing_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `agency_landing_table`
--

CREATE TABLE `agency_landing_table` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `phonenumber` varchar(40) DEFAULT NULL,
  `email` varchar(40) DEFAULT NULL,
  `category` varchar(20) DEFAULT NULL,
  `budgetrange` varchar(30) DEFAULT NULL,
  `projectdeadline` datetime DEFAULT NULL,
  `message` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `agency_landing_table`
--

INSERT INTO `agency_landing_table` (`id`, `name`, `phonenumber`, `email`, `category`, `budgetrange`, `projectdeadline`, `message`) VALUES
(1, 'iberfriiubi', '123412', 'vgenbivge@gr.com', 'Mobile App', '1-4999', '2000-02-12 04:35:00', 'fdewfewfewffwcw  ffcw rwfew'),
(2, 'Chang Wei Hong', '01116203836', 'changwh97@gmail.com', 'UI/UX Design', '5000-9999', '2021-11-11 00:12:00', 'nothing'),
(3, 'Steven', '0123456789', 'steven@email.com', 'Mobile App', '10000-15000', '2022-12-12 00:00:00', ''),
(4, 'Danny', '01234567', 'danny@email.com', 'Ecommerce', '5000-9999', '2023-02-20 00:12:00', ''),
(5, 'Chang', '0123456789', 'chang@gmail.com', 'Ecommerce', '5000-9999', '2021-01-01 00:12:00', ''),
(6, 'Hello Me', '0122222222', 'hello@me.com', 'Ecommerce', '1-4999', '2020-12-12 00:12:00', ''),
(7, 'John Doe', '12312312312', 'John_Doe@gmail.com', 'UI/UX Design', '10000-15000', '2121-12-12 00:12:00', ''),
(8, 'John Doe', '0123123123', 'John@gmail.com', 'UI/UX Design', '5000-9999', '2023-01-01 00:12:00', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `agency_landing_table`
--
ALTER TABLE `agency_landing_table`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `agency_landing_table`
--
ALTER TABLE `agency_landing_table`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
