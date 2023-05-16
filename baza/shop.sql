-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--

-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `parentId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Category_name_key` (`name`),
  KEY `Category_parentId_fkey` (`parentId`),
  CONSTRAINT `Category_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'2023-04-29 13:26:18.671','2023-04-29 13:26:18.671','Мягкая мебель',NULL),(2,'2023-04-29 13:26:18.671','2023-04-29 13:26:18.671','Диваны прямые',1),(3,'2023-04-29 13:26:18.671','2023-04-29 13:26:18.671','Диваны угловые',1),(4,'2023-04-29 13:26:18.671','2023-04-29 13:26:18.671','Диваны модульные',1),(5,'2023-04-29 13:26:18.671','2023-04-29 13:26:18.671','Матрасы',NULL),(6,'2023-04-29 13:26:18.671','2023-04-29 13:26:18.671','Ортопедические матрасы',5),(17,'2023-04-29 13:26:18.671','2023-04-29 13:26:18.671','Гостиные',NULL),(18,'2023-04-29 13:26:18.671','2023-04-29 13:26:18.671','Кресла',17);
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `city`
--

DROP TABLE IF EXISTS `city`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `city` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `City_name_key` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `city`
--

LOCK TABLES `city` WRITE;
/*!40000 ALTER TABLE `city` DISABLE KEYS */;
INSERT INTO `city` VALUES (1,'2023-04-29 19:49:58.903','2023-04-29 13:26:18.671','Астана'),(2,'2023-04-29 19:58:17.513','2023-04-29 13:26:18.671','Алматы'),(3,'2023-04-29 19:58:25.900','2023-04-29 13:26:18.671','Шымкент'),(4,'2023-04-29 19:58:38.711','2023-04-29 13:26:18.671','Актау'),(5,'2023-04-29 13:26:18.671','2023-04-29 13:26:18.671','Актобе'),(6,'2023-04-29 19:59:18.094','2023-04-29 13:26:18.671','Атбасар'),(7,'2023-04-29 19:59:29.088','2023-04-29 13:26:18.671','Байконур'),(8,'2023-04-29 19:59:38.352','2023-04-29 13:26:18.671','Балхаш'),(9,'2023-04-29 20:00:04.045','2023-04-29 13:26:18.671','Ерейментау'),(10,'2023-04-29 20:00:34.593','2023-04-29 13:26:18.671','Жанаозен'),(11,'2023-04-29 20:00:45.953','2023-04-29 13:26:18.671','Жезказган'),(12,'2023-04-29 20:01:00.408','2023-04-29 13:26:18.671','Караганда'),(13,'2023-04-29 20:01:13.183','2023-04-29 13:26:18.671','Кокшетау'),(14,'2023-04-29 20:01:21.657','2023-04-29 13:26:18.671','Конаев'),(15,'2023-04-29 20:01:36.406','2023-04-29 13:26:18.671','Костанай'),(16,'2023-04-29 20:01:42.947','2023-04-29 13:26:18.671','Кызылорда'),(17,'2023-04-29 20:01:55.538','2023-04-29 13:26:18.671','Павлодар'),(18,'2023-04-29 20:02:05.479','2023-04-29 13:26:18.671','Петропавловск');
/*!40000 ALTER TABLE `city` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorite`
--

DROP TABLE IF EXISTS `favorite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorite` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  `user_id` int NOT NULL,
  `product_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Favorite_user_id_fkey` (`user_id`),
  KEY `Favorite_product_id_fkey` (`product_id`),
  CONSTRAINT `Favorite_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Favorite_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorite`
--

LOCK TABLES `favorite` WRITE;
/*!40000 ALTER TABLE `favorite` DISABLE KEYS */;
/*!40000 ALTER TABLE `favorite` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `manufacturer`
--

DROP TABLE IF EXISTS `manufacturer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `manufacturer` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Manufacturer_name_key` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `manufacturer`
--

LOCK TABLES `manufacturer` WRITE;
/*!40000 ALTER TABLE `manufacturer` DISABLE KEYS */;
INSERT INTO `manufacturer` VALUES (1,'2023-04-29 20:24:21.255','2023-04-29 13:26:18.671','Yerbolat Mebel'),(2,'2023-04-29 20:24:32.189','2023-04-29 13:26:18.671','ДСП Центр'),(3,'2023-04-29 20:24:44.089','2023-04-29 13:26:18.671','Фронт мебель'),(4,'2023-04-29 20:25:02.820','2023-04-29 13:26:18.671','Topseller'),(5,'2023-04-29 20:25:22.695','2023-04-29 13:26:18.671','Profi KZ'),(6,'2023-04-29 20:25:35.330','2023-04-29 13:26:18.671','Панда Мебель'),(7,'2023-04-29 20:27:46.723','2023-04-29 13:26:18.671','Kazcnc'),(8,'2023-04-29 20:30:02.694','2023-04-29 13:26:18.671','Идеал'),(9,'2023-04-29 20:30:13.870','2023-04-29 13:26:18.671','Эксперт Мебель'),(10,'2023-04-29 20:30:37.699','2023-04-29 13:26:18.671','Алма Мебель');
/*!40000 ALTER TABLE `manufacturer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Order_user_id_fkey` (`user_id`),
  CONSTRAINT `Order_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` VALUES (1,'2023-05-02 15:57:31.785','2023-05-02 15:57:31.800','FINISH',1),(2,'2023-05-02 15:58:59.038','2023-05-02 15:58:59.051','FINISH',1),(3,'2023-05-02 16:17:30.360','2023-05-02 16:17:30.378','FINISH',1),(4,'2023-05-02 16:18:02.356','2023-05-02 16:18:02.374','FINISH',1),(5,'2023-05-02 16:19:05.134','2023-05-02 16:19:05.145','FINISH',1),(6,'2023-05-02 16:19:44.166','2023-05-02 16:19:44.179','FINISH',1),(7,'2023-05-02 16:49:23.452','2023-05-02 16:49:23.467','FINISH',1),(8,'2023-05-02 16:52:26.710','2023-05-02 16:52:26.722','FINISH',1),(9,'2023-05-02 16:56:59.323','2023-05-02 16:56:59.340','FINISH',1);
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orderitem`
--

DROP TABLE IF EXISTS `orderitem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orderitem` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  `count` int NOT NULL,
  `price` int NOT NULL,
  `order_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `OrderItem_order_id_fkey` (`order_id`),
  KEY `OrderItem_product_id_fkey` (`product_id`),
  CONSTRAINT `OrderItem_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `order` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `OrderItem_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orderitem`
--

LOCK TABLES `orderitem` WRITE;
/*!40000 ALTER TABLE `orderitem` DISABLE KEYS */;
INSERT INTO `orderitem` VALUES (1,'2023-05-02 15:57:31.799','2023-05-02 15:57:31.799',0,0,1,8),(2,'2023-05-02 15:58:59.049','2023-05-02 15:58:59.049',0,0,2,4),(3,'2023-05-02 16:17:30.372','2023-05-02 16:17:30.372',1,0,3,4),(4,'2023-05-02 16:18:02.370','2023-05-02 16:18:02.370',5,0,4,12),(5,'2023-05-02 16:18:02.371','2023-05-02 16:18:02.371',2,0,4,1),(6,'2023-05-02 16:18:02.373','2023-05-02 16:18:02.373',3,0,4,4),(7,'2023-05-02 16:19:05.145','2023-05-02 16:19:05.145',4,0,5,10),(8,'2023-05-02 16:19:44.177','2023-05-02 16:19:44.177',1,0,6,2),(9,'2023-05-02 16:49:23.464','2023-05-02 16:49:23.464',1,0,7,2),(10,'2023-05-02 16:56:59.336','2023-05-02 16:56:59.336',3,0,9,1),(11,'2023-05-02 16:56:59.338','2023-05-02 16:56:59.338',1,0,9,9),(12,'2023-05-02 16:56:59.339','2023-05-02 16:56:59.339',1,0,9,14);
/*!40000 ALTER TABLE `orderitem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `manufacturer` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `capacity` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `shape` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `collection` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `transformation_mechanism` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `hardness_level` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `upholstery_material` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `frame_material` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `leg_material` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `color` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `filler` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `leg_color` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `size` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `corner_location` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `design` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `spring_block` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `case_material` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `price` int NOT NULL DEFAULT '0',
  `articul` int NOT NULL DEFAULT '0',
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `price_with_discount` int NOT NULL DEFAULT '0',
  `category_id` int DEFAULT NULL,
  `manufacturer_id` int DEFAULT NULL,
  `product_path` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'default.png',
  `count` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Product_slug_key` (`slug`),
  UNIQUE KEY `Product_title_key` (`title`),
  KEY `Product_category_id_fkey` (`category_id`),
  KEY `Product_manufacturer_id_fkey` (`manufacturer_id`),
  CONSTRAINT `Product_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Product_manufacturer_id_fkey` FOREIGN KEY (`manufacturer_id`) REFERENCES `manufacturer` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'2023-04-29 13:26:18.671','2023-04-29 13:26:18.671','Incredible Soft Pizza','Yerbolat Mebel','','','','','','','','','','','','','','','','','',92000,1111,'Licensed Rubber Chicken',79990,NULL,NULL,'item.webp',20),(2,'2023-04-29 13:26:18.685','2023-04-29 13:26:18.685','Incredible Frozen Computer','ДСП Центр','','','','','','','','','','','','','','','','','',45000,1112,'Ergonomic Cotton Shirt',39990,6,NULL,'item2.webp',3),(3,'2023-04-29 13:26:18.688','2023-04-29 13:26:18.688','Sleek Soft Pizza','Фронт мебель','','','','','','','','','','','','','','','','','',180000,1113,'Oriental Cotton Keyboard',169990,NULL,NULL,'item3.webp',18),(4,'2023-04-29 13:26:18.691','2023-04-29 13:26:18.691','Elegant Cotton Pizza','Topseller','','','','','','','','','','','','','','','','','',170000,1114,'Gorgeous Rubber Cheese',159990,NULL,NULL,'item4.webp',24),(5,'2023-04-29 13:26:18.694','2023-04-29 13:26:18.694','Small Plastic Hat','Profi KZ','','','','','','','','','','','','','','','','','',220000,1115,'Awesome Wooden Chips',198990,NULL,NULL,'item5.webp',16),(6,'2023-04-29 13:26:18.706','2023-04-29 13:26:18.706','Practical Fresh Pizza','Панда Мебель','','','','','','','','','','','','','','','','','',250000,1116,'Handmade Cotton Soap',239990,3,NULL,'item6.webp',50),(7,'2023-04-29 13:26:18.709','2023-04-29 13:26:18.709','Unbranded Concrete Tuna','Kazcnc','','','','','','','','','','','','','','','','','',92000,1117,'Sleek Soft Pizza',87990,NULL,NULL,'item7.webp',120),(8,'2023-04-29 13:26:18.712','2023-04-29 13:26:18.712','Awesome Granite Mouse','Идеал','','','','','','','','','','','','','','','','','',430000,1118,'Gorgeous Bronze Mouse',399990,NULL,NULL,'item8.webp',73),(9,'2023-04-29 13:26:18.715','2023-04-29 13:26:18.715','Awesome Plastic Hat','Эксперт Мебель','','','','','','','','','','','','','','','','','',220000,1119,'Intelligent Cotton Fish',211990,NULL,NULL,'item9.webp',54),(10,'2023-04-29 13:26:18.717','2023-04-29 13:26:18.717','Handcrafted Frozen Pants','Алма Мебель','','','','','','','','','','','','','','','','','',84000,1120,'Generic Concrete Gloves',79990,18,NULL,'item10.webp',83),(11,'2023-04-29 13:26:18.720','2023-04-29 13:26:18.720','Ergonomic Frozen Chair','Topseller','','','','','','','','','','','','','','','','','',26000,1121,'Gorgeous Granite Computer',24990,18,NULL,'item11.webp',30),(12,'2023-04-29 13:26:18.723','2023-04-29 13:26:18.723','Refined Plastic Fish','Profi KZ','','','','','','','','','','','','','','','','','',40000,1122,'Elegant Metal Computer',34990,NULL,NULL,'item12.webp',55),(13,'2023-04-29 13:26:18.726','2023-04-29 13:26:18.726','Refined Cotton Car','ДСП Центр','','','','','','','','','','','','','','','','','',95000,1123,'Elegant Frozen Sausages',89990,18,NULL,'item13.webp',26),(14,'2023-04-29 13:26:18.728','2023-04-29 13:26:18.728','Fantastic Granite Pants','Yerbolat Mebel','','','','','','','','','','','','','','','','','',72000,1124,'Tasty Steel Shoes',69990,18,NULL,'item14.webp',42),(15,'2023-04-29 13:26:18.731','2023-04-29 13:26:18.731','Electronic Rubber Pizza','Идеал','','','','','','','','','','','','','','','','','',80000,1125,'Refined Soft Chair',74990,18,NULL,'item15.webp',94);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  `text` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rating` int NOT NULL,
  `user_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Review_user_id_fkey` (`user_id`),
  KEY `Review_product_id_fkey` (`product_id`),
  CONSTRAINT `Review_product_id_fkey` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Review_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated_at` datetime(3) NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `login` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar_path` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '/uploads/user.png',
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `address` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `isAdmin` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `User_email_key` (`email`),
  UNIQUE KEY `User_login_key` (`login`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'2023-04-29 13:27:17.318','2023-05-02 16:43:51.143','test@gmail.com','SerAbizyan','$argon2id$v=19$m=65536,t=3,p=4$UpQO4nbX609dN83taNHNFw$lxq5yGB0hyOgDMNNwVysNMTfu1Gvjilm0OeAxIg/HTA','/uploads/user.png','87772282288','Testname1','Улица Пушкина дом Колотушкина',1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-02 23:13:47
