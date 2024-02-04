CREATE DATABASE `excel_to_html` ;

CREATE TABLE `excel_to_html`.`files` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `author` VARCHAR(255) NULL,
  `csv` VARCHAR(255) NULL,
  `created_at` VARCHAR(255) NULL,
  PRIMARY KEY (`id`));

-- TRUNCATE TABLE bulletin // for reset including id's
