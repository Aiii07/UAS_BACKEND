-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 17 Jan 2025 pada 09.42
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `express_hrd_api`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `emplo`
--

CREATE TABLE `emplo` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `address` text NOT NULL,
  `graduation_year` int(11) NOT NULL,
  `status` varchar(255) NOT NULL,
  `company_name` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `employee`
--

CREATE TABLE `employee` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `gender` char(1) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `address` text NOT NULL,
  `email` varchar(255) NOT NULL,
  `status` enum('active','inactive','terminated') NOT NULL,
  `hired_on` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `employee`
--

INSERT INTO `employee` (`id`, `name`, `gender`, `phone`, `address`, `email`, `status`, `hired_on`) VALUES
(1, 'Aisyah Nurul Fitriah', 'P', '085171034713', 'Jl. Swadaya No 29', 'aisyah@gmail.com', 'active', '2022-12-12'),
(2, 'Azkiya Zahra', 'P', '081234567192', 'Jl. Pala No 75', 'azkiya@gmail.com', 'inactive', '2023-01-01'),
(3, 'Ahmad Qurtubi', 'L', '080872451082', 'Jl. Revolusi No 34', 'mega@gmail.com', 'terminated', '2023-01-01');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `emplo`
--
ALTER TABLE `emplo`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `emplo`
--
ALTER TABLE `emplo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `employee`
--
ALTER TABLE `employee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
