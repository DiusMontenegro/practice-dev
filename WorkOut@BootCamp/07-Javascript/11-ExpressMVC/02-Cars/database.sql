CREATE DATABASE express_mvc_cars;
USE express_mvc_cars;

CREATE TABLE `express_mvc_cars`.`cars` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NULL,
  `year` INT NULL,
PRIMARY KEY (`id`));


INSERT INTO `express_mvc_cars`.`cars` (`name`, `year`) VALUES ('Lamborghini Aventador SVJ', '2024');
INSERT INTO `express_mvc_cars`.`cars` (`name`, `year`) VALUES ('Bugatti La Voiture Noire', '2024');
INSERT INTO `express_mvc_cars`.`cars` (`name`, `year`) VALUES ('Koenigsegg Jesko Absolut', '2024');
