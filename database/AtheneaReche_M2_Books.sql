-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 25, 2025 at 10:20 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `AtheneaReche_M2_Books`
--

-- --------------------------------------------------------

--
-- Table structure for table `authors`
--

CREATE TABLE `authors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `author_picture` varchar(100) DEFAULT NULL,
  `biography` varchar(500) DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `decease_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `authors`
--

INSERT INTO `authors` (`id`, `name`, `author_picture`, `biography`, `birthdate`, `decease_date`) VALUES
(3, 'Lewis Carroll', NULL, 'English author and poet', '1832-01-27', NULL),
(4, 'Frank Herbert', NULL, NULL, NULL, NULL),
(5, 'Jane Austen', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `book_cover` varchar(100) DEFAULT NULL,
  `genre` enum('Novel','Short Story','Poetry','Theatre','Essay','Chronicle','Autobiography','Biography','Comic','Graphic Novel','Epistle','Narrative','Drama','Fantasy','Science Fiction','Horror','Romance','Historical','Adventure','Crime','Contemporary','Cooking') DEFAULT NULL,
  `publishing_year` date DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `author` bigint(20) UNSIGNED NOT NULL,
  `publisher` bigint(20) UNSIGNED DEFAULT NULL,
  `ISBN` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `name`, `book_cover`, `genre`, `publishing_year`, `description`, `author`, `publisher`, `ISBN`) VALUES
(3, 'Dune', NULL, NULL, NULL, 'Science fiction epic by Frank Herbert.', 4, NULL, NULL),
(4, 'Pride and Prejudice', NULL, NULL, NULL, 'A romantic novel by Jane Austen.', 5, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `books_collections`
--

CREATE TABLE `books_collections` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `books_collections`
--

INSERT INTO `books_collections` (`id`, `user`, `name`) VALUES
(1, 2, 'Favourites'),
(2, 3, 'Favourites');

-- --------------------------------------------------------

--
-- Table structure for table `books_collections-book`
--

CREATE TABLE `books_collections-book` (
  `book` bigint(20) UNSIGNED NOT NULL,
  `collection` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `publishers`
--

CREATE TABLE `publishers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `country` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `publishers`
--

INSERT INTO `publishers` (`id`, `name`, `country`) VALUES
(1, 'Minotauro', 'ES');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` enum('admin','user') NOT NULL DEFAULT 'user',
  `favourites` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`, `favourites`) VALUES
(2, 'usuario test', 'usuario@example.com', '$2b$10$r.QapXwfrIRMabjRYGrpzuRvkAM3f3NcsaZl3JEPQBdT0cNB.q1JS', 'user', NULL),
(3, 'usuario admin', 'admin@example.com', '$2b$10$Yxv3SXiukZ8C.5HGcnMgYOT.vY6cMbGNJKpzkEchQaIBLsykXFno2', 'admin', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users-books`
--

CREATE TABLE `users-books` (
  `user` bigint(20) UNSIGNED NOT NULL,
  `book` bigint(20) UNSIGNED NOT NULL,
  `reading_progress` bigint(20) NOT NULL,
  `reading_status` enum('pending','reading','finished') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users-books`
--

INSERT INTO `users-books` (`user`, `book`, `reading_progress`, `reading_status`) VALUES
(3, 3, 0, 'reading');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD KEY `publisher` (`publisher`),
  ADD KEY `author` (`author`);

--
-- Indexes for table `books_collections`
--
ALTER TABLE `books_collections`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user` (`user`);

--
-- Indexes for table `books_collections-book`
--
ALTER TABLE `books_collections-book`
  ADD PRIMARY KEY (`book`,`collection`),
  ADD KEY `collection` (`collection`);

--
-- Indexes for table `publishers`
--
ALTER TABLE `publishers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `users_ibfk_1` (`favourites`);

--
-- Indexes for table `users-books`
--
ALTER TABLE `users-books`
  ADD PRIMARY KEY (`user`,`book`),
  ADD KEY `book` (`book`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `authors`
--
ALTER TABLE `authors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `books_collections`
--
ALTER TABLE `books_collections`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `publishers`
--
ALTER TABLE `publishers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `books_ibfk_1` FOREIGN KEY (`publisher`) REFERENCES `publishers` (`id`),
  ADD CONSTRAINT `books_ibfk_2` FOREIGN KEY (`author`) REFERENCES `authors` (`id`);

--
-- Constraints for table `books_collections`
--
ALTER TABLE `books_collections`
  ADD CONSTRAINT `books_collections_ibfk_1` FOREIGN KEY (`user`) REFERENCES `users` (`id`);

--
-- Constraints for table `books_collections-book`
--
ALTER TABLE `books_collections-book`
  ADD CONSTRAINT `books_collections-book_ibfk_1` FOREIGN KEY (`collection`) REFERENCES `books_collections` (`id`),
  ADD CONSTRAINT `books_collections-book_ibfk_2` FOREIGN KEY (`book`) REFERENCES `books` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`favourites`) REFERENCES `books_collections` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `users-books`
--
ALTER TABLE `users-books`
  ADD CONSTRAINT `users-books_ibfk_1` FOREIGN KEY (`user`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `users-books_ibfk_2` FOREIGN KEY (`book`) REFERENCES `books` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
