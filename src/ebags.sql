/*
Navicat MySQL Data Transfer

Source Server         : JOJO
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : ebags

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-08-27 20:01:35
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `rate` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `date` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `price` decimal(10,2) DEFAULT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `xxurl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=46 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('1', '48 Ratings', 'Stephen Joseph', 'Classic Rolling Luggage', '2018-08-24 14:13:55', '346.70', 'j-4.jpg', '55.png');
INSERT INTO `list` VALUES ('2', '7 Ratings', 'TrendyKid', 'Travel Buddies 2Pc Set', '2018-07-23 11:27:53', '770.53', 'j-2.jpg', '2.png');
INSERT INTO `list` VALUES ('3', '1 Ratings', 'Stephen Joseph', 'Kids Quilted Duffel', '2018-05-23 11:29:16', '200.28', 'j-3.jpg', '55.png');
INSERT INTO `list` VALUES ('4', '1 Ratings', 'Olympia USA', 'Playday Collection Carry-On', '2018-08-24 14:13:58', '616.49', 'j-1.jpg', '55.png');
INSERT INTO `list` VALUES ('5', '7 Ratings', 'TrendyKid', 'Travel Buddies Tigert', '2018-08-24 11:29:20', '773.53', 'j-5.jpg', '55.png');
INSERT INTO `list` VALUES ('6', '1 Ratings', 'Stephen Joseph', 'Kids Quilted Duffel', '2018-08-13 11:27:55', '200.28', 'j-6.jpg', '2.png');
INSERT INTO `list` VALUES ('7', '12 Ratings', 'Olympia USA', 'Playday Collection Carry-On', '2018-08-13 11:30:52', '346.70', 'j-7.jpg', '4.png');
INSERT INTO `list` VALUES ('8', '20 Ratings', 'TrendyKid', 'Bella  and Backpack', '2018-08-18 11:27:56', '770.59', 'j-8.jpg', '2.png');
INSERT INTO `list` VALUES ('9', '4 Ratings', 'Obersee', 'Kids Star Luggage and Cooler', '2018-07-21 11:29:22', '750.53', 'j-9.jpg', '55.png');
INSERT INTO `list` VALUES ('10', ' \r\n14 Ratings', 'Obersee', 'Kids Star 16\" Upright Carry', '2018-09-26 11:30:53', '539.35', 'j-10.jpg', '4.png');
INSERT INTO `list` VALUES ('11', '3 Ratings', 'Obersee', 'Kids Motorcycle 16\" Upright', '2018-08-29 11:29:24', '549.35', 'j-11.jpg', '55.png');
INSERT INTO `list` VALUES ('12', '11 Ratings', 'TrendyKid', 'Travel Buddies School Bus', '2018-08-13 11:29:25', '577.88', 'j-12.jpg', '55.png');
INSERT INTO `list` VALUES ('13', '3 Ratings', 'Obersee', 'Kids Motorcycle 16\" Upright', '2018-08-20 11:29:26', '548.35', 'j-13.jpg', '55.png');
INSERT INTO `list` VALUES ('14', '11 Ratings', 'TrendyKid', 'Travel Buddies School Bus', '2018-08-21 11:29:27', '587.88', 'j-14.jpg', '55.png');
INSERT INTO `list` VALUES ('15', '48 Ratings', 'Stephen Joseph', 'Classic Rolling Luggage', '2018-08-23 11:27:58', '344.74', 'j-15.jpg', '2.png');
INSERT INTO `list` VALUES ('16', '7 Ratings', 'TrendyKid', 'Travel Buddies 2Pc Set', '2018-08-23 11:29:29', '370.53', 'j-16.jpg', '55.png');
INSERT INTO `list` VALUES ('17', '1 Ratings', 'Stephen Joseph', 'Kids Quilted Duffel', '2018-08-23 11:29:29', '204.28', 'j-17.jpg', '55.png');
INSERT INTO `list` VALUES ('18', ' \r\n1 Ratings', 'Olympia USA', 'Playday Collection Carry-On', '2018-08-23 11:29:30', '636.49', 'j-18.jpg', '55.png');
INSERT INTO `list` VALUES ('19', '7 Ratings', 'TrendyKid', 'Travel Buddies Tigert', '2018-08-23 11:28:24', '970.53', 'j-19.jpg', '4.png');
INSERT INTO `list` VALUES ('20', '1 Ratings', 'Stephen Joseph', 'Kids Quilted Duffel', '2018-08-25 11:29:31', '206.28', 'j-20.jpg', '55.png');
INSERT INTO `list` VALUES ('21', ' \r\n1 Ratings', 'Olympia USA', 'Playday Collection Carry-On', '2018-08-23 11:27:59', '746.76', 'j-21.jpg', '2.png');
INSERT INTO `list` VALUES ('22', '20 Ratings', 'TrendyKid', 'Bella  and Backpack', '2018-08-10 11:30:54', '773.53', 'j-22.jpg', '4.png');
INSERT INTO `list` VALUES ('23', '4 Ratings', 'Obersee', 'Kids Star Luggage and Cooler', '2018-08-09 11:28:35', '773.53', 'j-23.jpg', '5.png');
INSERT INTO `list` VALUES ('24', '14 Ratings', 'Obersee', 'Kids Star 16\" Upright Carry', '2018-08-23 11:28:36', '559.35', 'j-24.jpg', '5.png');
INSERT INTO `list` VALUES ('25', '3 Ratings', 'Obersee', 'Kids Motorcycle 16\" Upright', '2018-08-09 11:28:01', '539.35', 'j-25.jpg', '2.png');
INSERT INTO `list` VALUES ('26', '11 Ratings', 'TrendyKid', 'Travel Buddies School Bus', '2018-08-23 11:28:53', '377.88', 'j-26.jpg', '52.png');
INSERT INTO `list` VALUES ('27', '14 Ratings', 'Obersee', 'Kids Star 16\" Upright Carry', '2018-08-01 11:28:23', '559.34', 'j-27.jpg', '4.png');
INSERT INTO `list` VALUES ('28', '11 Ratings', 'TrendyKid', 'Travel Buddies School Bus', '2018-08-03 11:28:37', '377.84', 'j-28.jpg', '5.png');
INSERT INTO `list` VALUES ('29', '7 Ratings', 'TrendyKid', 'Travel Buddies 2Pc Set', '2018-08-23 11:28:54', '770.54', 'j-29.jpg', '52.png');
INSERT INTO `list` VALUES ('30', '1 Ratings', 'Olympia USA', 'Playday Collection Carry-On', '2018-08-05 11:30:58', '616.42', 'j-30.jpg', '4.png');
INSERT INTO `list` VALUES ('31', '7 Ratings', 'TrendyKid', 'Travel Buddies 2Pc Set', '2018-08-23 11:28:38', '770.56', 'j-31.jpg', '5.png');
INSERT INTO `list` VALUES ('32', '1 Ratings', 'Olympia USA', 'Playday Collection Carry-On', '2018-08-04 11:28:17', '616.48', 'j-32.jpg', '4.png');
INSERT INTO `list` VALUES ('33', '7 Ratings', 'TrendyKid', 'Travel Buddies Tigert', '2018-08-23 11:28:40', '770.52', 'j-33.jpg', '5.png');
INSERT INTO `list` VALUES ('34', '20 Ratings', 'TrendyKid', 'Bella  and Backpack', '2018-08-07 11:28:55', '770.53', 'j-34.jpg', '52.png');
INSERT INTO `list` VALUES ('35', '4 Ratings', 'Obersee', 'Kids Star Luggage and Cooler', '2018-08-07 11:28:40', '770.55', 'j-35.jpg', '5.png');
INSERT INTO `list` VALUES ('36', '14 Ratings', 'Obersee', 'Kids Star 16\" Upright Carry', '2018-08-23 11:28:18', '539.38', 'j-36.jpg', '4.png');
INSERT INTO `list` VALUES ('37', '3 Ratings', 'Obersee', 'Kids Motorcycle 16\" Upright', '2018-08-23 11:28:56', '548.36', 'j-37.jpg', '52.png');
INSERT INTO `list` VALUES ('38', '11 Ratings', 'TrendyKid', 'Travel Buddies School Bus', '2018-08-06 11:29:10', '587.82', 'j-38.jpg', '55.png');
INSERT INTO `list` VALUES ('39', '1 Ratings', 'Stephen Joseph', 'Kids Quilted Duffel', '2018-08-23 11:28:19', '204.22', 'j-39.jpg', '4.png');
INSERT INTO `list` VALUES ('40', '1 Ratings', 'Olympia USA', 'Playday Collection Carry-On', '2018-08-23 11:31:01', '636.42', 'j-40.jpg', '4.png');
INSERT INTO `list` VALUES ('41', '7 Ratings', 'TrendyKid', 'Travel Buddies Tigert', '2018-08-04 11:28:56', '970.59', 'j-41.jpg', '52.png');
INSERT INTO `list` VALUES ('42', ' \r\n \r\n1 Ratings', 'Olympia USA', 'Travel Buddies Tigert', '2018-08-03 11:28:58', '970.57', 'j-42.jpg', '52.png');
INSERT INTO `list` VALUES ('43', '3 Ratings', 'Obersee', 'Kids Motorcycle 16\" Upright', '2018-08-08 11:28:03', '539.32', 'j-43.jpg', '2.png');
INSERT INTO `list` VALUES ('44', '20 Ratings', 'TrendyKid', 'Bella  and Backpack', '2018-08-08 11:31:03', '773.53', 'j-44.jpg', '4.png');
INSERT INTO `list` VALUES ('45', '4 Ratings', 'TrendyKid', 'Travel Buddies Tigert', '2018-08-23 11:28:43', '970.51', 'j-45.jpg', '5.png');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `age` int(2) NOT NULL,
  `password` varchar(255) NOT NULL,
  `site` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `area` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', '1246374352@qq.com', 'JOJO', '10', '123456', '', '', '', null);
INSERT INTO `users` VALUES ('2', '123456789@qq.com', 'jojo', '8', '123456', '', '', '', null);
INSERT INTO `users` VALUES ('19', '1234564589@qq.com', 'jojp', '67', 'gvihjki', 'hiuok', '567890', 'jopiol', 'vbyiunbi');
INSERT INTO `users` VALUES ('20', '123836789@qq.com', 'ff', '23', 'desfdhgtrh', 'zdvgfdbg', '123456', 'sdfvdb', 'cdbvgfb');
INSERT INTO `users` VALUES ('18', '12436587@qq.com', 'jojo', '15', 'awrdewfe', 'nhfdgr', '123456', 'cdsvfhtdh', 'fsdrgtrhytr');
INSERT INTO `users` VALUES ('16', '123406789@qq.com', 'jj', '12', '1234567', 'aesftrghy', '112345', 'asdfgh', 'sdfghj');
INSERT INTO `users` VALUES ('17', '127456789@qq.com', 'jojo', '12', '123456789', 'äº‹éƒ½æ˜¯åŒæ–¹çš„ç”Ÿæ—¥è´¹', '123456', 'çˆ±æƒ…æ˜¯å¤§æ³•å®˜å¥½', 'é˜¿æ–¯é¡¿æ³•å›½');
INSERT INTO `users` VALUES ('11', '123456781@qq.com', 'jojo', '12', '12345678', 'aqswdefrgthy', '123456', 'asdfghjk', 'asdfghjkl');
INSERT INTO `users` VALUES ('12', '123456781@qq.com', 'jojo', '12', '12345678', 'aqswdefrgthy', '123456', 'asdfghjk', 'asdfghjkl');
INSERT INTO `users` VALUES ('13', '123456781@qq.com', 'jojo', '12', '12345678', 'aqswdefrgthy', '123456', 'asdfghjk', 'asdfghjkl');
INSERT INTO `users` VALUES ('14', '123456786@qq.com', 'jojo', '12', 'asdfghjk', 'sdfghnjmwqert', '123456', 'asdfghj', 'sdfghjkl');
SET FOREIGN_KEY_CHECKS=1;
