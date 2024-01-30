CREATE DATABASE 'authentication1';

CREATE TABLE `authentication1`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(50) NULL,
  `last_name` VARCHAR(50) NULL,
  `email` VARCHAR(255) NULL,
  `contact_number` VARCHAR(255) NULL,
  `password` VARCHAR(255) NULL,
  `salt` VARCHAR(255) NULL,
  `encrypted_password` VARCHAR(255) NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`));


-- TRUNCATE TABLE bulletin // for reset including id's
