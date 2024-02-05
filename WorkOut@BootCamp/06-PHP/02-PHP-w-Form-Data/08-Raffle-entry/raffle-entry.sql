CREATE DATABASE raffle_entries;
USE raffle_entries;
CREATE TABLE entries (
    entry_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    contact_number VARCHAR(255),
    created_at VARCHAR(255)
);

TRUNCATE TABLE entries; -- to delete and reset the table.
