CREATE DATABASE 'blog';

CREATE TABLE IF NOT EXISTS `blog`.`users` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(45) NULL,
    `last_name` VARCHAR(45) NULL,
    `email` VARCHAR(45) NULL,
    `password` VARCHAR(45) NULL,
    `salt` VARCHAR(255) NULL,
    `encrypted_password` VARCHAR(255),
    `created_at` DATETIME NULL,
    `updated_at` DATETIME NULL,
    PRIMARY KEY (`id`));

CREATE TABLE IF NOT EXISTS `blog`.`reviews` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `user_id` INT NOT NULL,
    `full_name` VARCHAR(45) NULL,
    `context` TEXT NULL,
    `created_at` VARCHAR(255) NULL,
    `updated_at` VARCHAR(255) NULL,
    PRIMARY KEY (`id`),
    INDEX `fk_reviews_users_idx` (`user_id` ASC) VISIBLE,
    CONSTRAINT `fk_reviews_users`
        FOREIGN KEY (`user_id`)
        REFERENCES `blog`.`users` (`id`)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION);

CREATE TABLE IF NOT EXISTS `blog`.`replies` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `review_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `full_name` VARCHAR(255) NULL,
  `content` TEXT NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_replies_reviews1_idx` (`review_id` ASC) VISIBLE,
  INDEX `fk_replies_users1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_replies_reviews1`
    FOREIGN KEY (`review_id`)
    REFERENCES `blog`.`reviews` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_replies_users1`
    FOREIGN KEY (`user_id`)
    REFERENCES `blog`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


-- TRUNCATE TABLE bulletin // for reset including id's
