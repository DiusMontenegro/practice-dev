CREATE DATABASE 'blog';

CREATE TABLE IF NOT EXISTS `wall`.`users` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(45) NULL,
    `last_name` VARCHAR(45) NULL,
    `email` VARCHAR(45) NULL,
    `password` VARCHAR(255) NULL,
    `salt` VARCHAR(255) NULL,
    `created_at` VARCHAR(255) NULL,
    `updated_at` VARCHAR(255) NULL,
    PRIMARY KEY (`id`));

CREATE TABLE `wall`.`posts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` VARCHAR(45) NULL,
  `full_name` VARCHAR(255) NULL,
  `post` TEXT NULL,
  `created_at` VARCHAR(255) NULL,
  `updated_at` VARCHAR(255) NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `wall`.`replies` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `post_id` VARCHAR(45) NULL,
  `user_id` VARCHAR(45) NULL,
  `full_name` VARCHAR(255) NULL,
  `reply` TEXT NULL,
  `created_at` VARCHAR(255) NULL,
  `updated_at` VARCHAR(255) NULL,
  PRIMARY KEY (`id`));

-- TRUNCATE TABLE bulletin // for reset including id's
