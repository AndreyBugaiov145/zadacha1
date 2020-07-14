-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1
-- Время создания: Июл 14 2020 г., 09:31
-- Версия сервера: 5.5.25
-- Версия PHP: 5.2.12

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `mybase`
--

-- --------------------------------------------------------

--
-- Структура таблицы `pages`
--

CREATE TABLE IF NOT EXISTS `pages` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `friendly` text NOT NULL,
  `img` text NOT NULL,
  `title` text NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Дамп данных таблицы `pages`
--

INSERT INTO `pages` (`id`, `friendly`, `img`, `title`, `description`) VALUES
(1, 'cat', 'cat.jpg', 'Cat', 'про котов --Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam porro fugiat aperiam delectus quas vitae ducimus cumque enim magni blanditiis, minima debitis esse saepe omnis tempora doloribus optio repellat fuga quos excepturi iure unde perspiciatis odit animi. Aliquam culpa ipsum doloremque eius necessitatibus officia sapiente consectetur rerum aliquid vero etdi ipsam quas ea, voluptatum voluptates, facere quasi perferendis amet quia esse vero aperiam porro quisquam.'),
(3, 'dog', 'dog.jpg', 'Dog', 'Про собак --- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam porro fugiat aperiam delectus quas vitae ducimus cumque enim magni blanditiis, minima debitis esse saepe omnis tempora doloribus optio repellat fuga quos excepturi iure unde perspiciatis odit animi. Aliquam culparro, necessitatibus dolore beatae nihil. Libero consequuntur dolor iure fugit nam commodi ipsam quas ea, voluptatum voluptates, facere quasi perferendis amet quia esse vero aperiam porro quisquam.'),
(4, 'mouse', 'mouse.png', 'Mouse', 'про мышей --- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam porro fugiat aperiam delectus quas vitae ducimus cumque enim magni blanditiis, minima debitis esse saepe omnis tempora doloribus os, ducimus magni, nihil nulla placeat. Voluptates repellat corporis id a fugiat sint nobis, porro, necessidolore beatae nihil. Libero consequuntur dolor iure fugit nam commodi ipsam quas ea, voluptatum voluptates, facere quasi perferendis amet quia esse vero aperiam porro quisquam.');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
