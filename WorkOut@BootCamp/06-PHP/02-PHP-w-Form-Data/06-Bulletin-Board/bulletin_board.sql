CREATE DATABASE 'bulletin_board';

CREATE TABLE `bulletin` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(50) NULL,
  `details` TEXT NULL,
  `created_at` VARCHAR(255) NULL,
  PRIMARY KEY (`id`));

-- TRUNCATE TABLE bulletin // for reset including id's
