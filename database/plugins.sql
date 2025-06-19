-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-06-2025 a las 23:04:59
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tpbackend`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `plugins`
--

CREATE TABLE `plugins` (
  `id` int(11) NOT NULL,
  `nombre` varchar(230) NOT NULL,
  `tipo` varchar(200) NOT NULL,
  `empresa` varchar(230) NOT NULL,
  `gratis` tinyint(1) DEFAULT 0,
  `fecha` int(4) DEFAULT NULL,
  `aplicacion` varchar(230) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `plugins`
--

INSERT INTO `plugins` (`id`, `nombre`, `tipo`, `empresa`, `gratis`, `fecha`, `aplicacion`) VALUES
(1, 'TDR Kotelnikov', 'Compresor de rango amplio', 'Tokyo Dawn Records', 1, NULL, 'Mastering y mezcla en general'),
(2, 'Renaissance Vox', 'Compresor de voces', 'Waves Audio', 0, NULL, 'Voces principales y coros'),
(3, 'TDR Nova', 'Ecualizador dinámico', 'Tokyo Dawn Records', 1, NULL, 'Voz, bajo, guitarra, baterías'),
(4, 'TDR SlickEQ', 'Ecualizador musical', 'Tokyo Dawn Records', 1, NULL, 'Guitarra, voz, teclados'),
(5, 'Valhalla Super Massive', 'Reverb y Delay espacial', 'Valhalla DSP', 1, NULL, 'Guitarras, sintetizadores, voces'),
(6, 'Fresh Air', 'Excitador de agudos', 'Slate Digital', 1, NULL, 'Voces, guitarras acústicas, baterías'),
(7, 'MJUC Tube Compressor', 'Compresor de tubo (vari-mu)', 'Klanghelm', 0, NULL, 'Voces, bajo, batería, bus de mezcla'),
(8, 'MK2 Drums', 'Instrumento Virtual (baterías electrónicas)', 'Beatskillz', 1, NULL, 'Baterías hip-hop, trap, EDM'),
(9, 'Xpand!2', 'ROMpler (instrumento multitimbrico)', 'AIR Music Technology', 0, NULL, 'Teclados, bajos, cuerdas, sintetizadores'),
(10, 'Waves Audio H-Comp', 'Compresor híbrido (analógico/digital)', 'Waves Audio', 0, NULL, 'Batería, bajo, voz'),
(11, 'Pultec EQP-1A', 'Ecualizador analógico (emulación)', 'Waves Audio', 0, NULL, 'Bajo, bombo, voz, guitarra'),
(13, 'Renaissance Vox', 'Compresor de voces', 'Waves Audio', 0, NULL, 'Voces principales y coros');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `plugins`
--
ALTER TABLE `plugins`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `plugins`
--
ALTER TABLE `plugins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
