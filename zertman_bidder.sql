-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 13, 2017 at 01:23 
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zertman_bidder`
--

-- --------------------------------------------------------

--
-- Table structure for table `bids`
--

CREATE TABLE `bids` (
  `bidGUID` varchar(36) NOT NULL,
  `slotGUID` varchar(36) NOT NULL,
  `effDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `bidder` varchar(100) NOT NULL,
  `bidAmmount` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bids`
--

INSERT INTO `bids` (`bidGUID`, `slotGUID`, `effDate`, `bidder`, `bidAmmount`) VALUES
('d6a92057-2012-11e7-847e-701a04d24872', 'fefb8777-2012-11e7-847e-701a04d24872', '2017-04-13 12:04:28', 'ozkarta', '500'),
('37766ffb-2022-11e7-847e-701a04d24872', 'd6a92057-2012-11e7-847e-701a04d24872', '2017-04-13 12:21:38', 'ozkarta', '600'),
('f1909b4f-2039-11e7-847e-701a04d24872', 'd6a92057-2012-11e7-847e-701a04d24872', '2017-04-13 15:11:29', 'ozzy', '602'),
('12c691fd-203a-11e7-847e-701a04d24872', 'd6a92057-2012-11e7-847e-701a04d24872', '2017-04-13 15:12:25', 'ozzy2', '602'),
('25a4e9bc-203a-11e7-847e-701a04d24872', 'd6a92057-2012-11e7-847e-701a04d24872', '2017-04-13 15:12:56', 'ozzy3', '603'),
('bd66768f-203a-11e7-847e-701a04d24872', 'd6a92057-2012-11e7-847e-701a04d24872', '2017-04-13 15:17:11', 'ozzy4', '604'),
('e4ffa046-203a-11e7-847e-701a04d24872', 'd6a92057-2012-11e7-847e-701a04d24872', '2017-04-13 15:18:18', 'ozzy5', '605'),
('f5d0ec7d-203a-11e7-847e-701a04d24872', 'd6a92057-2012-11e7-847e-701a04d24872', '2017-04-13 15:18:46', 'ozzy6', '606');

-- --------------------------------------------------------

--
-- Table structure for table `slots`
--

CREATE TABLE `slots` (
  `slotGUID` varchar(36) NOT NULL,
  `slotName` varchar(100) NOT NULL,
  `slotDescription` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `slots`
--

INSERT INTO `slots` (`slotGUID`, `slotName`, `slotDescription`) VALUES
('d6a92057-2012-11e7-847e-701a04d24872', 'BMW E34', 'This is Legend car with sexy look and powerfull engine');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
