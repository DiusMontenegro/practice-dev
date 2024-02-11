CREATE DATABASE shopping_spree;
USE shopping_spree;

CREATE TABLE products (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    price INT,
    image TEXT,
    created_at VARCHAR(50),
    updated_at VARCHAR(50)
);

CREATE TABLE cart (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    product_id INT,
    name VARCHAR(255),
    quantity INT,
    price INT,
    created_at VARCHAR(50),
    updated_at VARCHAR(50)
);
