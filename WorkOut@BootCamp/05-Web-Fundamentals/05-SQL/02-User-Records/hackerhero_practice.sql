-- 1. What's the query for creating this new database table with the fields above?
CREATE TABLE Users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255),
    encrypted_password VARCHAR(255),
    created_at DATETIME,
    updated_at DATETIME
);

-- 2. What's the query for inserting new records into this table? Write queries for inserting three fake users into the table (one query for each insert).
INSERT INTO Users (id, first_name, last_name, email, encrypted_password, created_at, updated_at)
VALUES 
    ('1', 'Lexi', 'Lore', 'faketaxi69@gmail.com', 'jashdjsaldk', '2024-01-19', '2024-01-20'),
    ('2', 'Johnny', 'sins', 'ph11@gmail.com', 'jsadjsald', '2024-01-19', '2024-01-20'),
    ('3', 'Lana', 'Rhodes', 'Rhodes@gmail.com', 'ksadhsaudyg', '2024-01-19', '2024-01-20');

-- 3. What's the query for updating one of the user records? 
-- For example, if you wanted to update the user record for id = 1, with some fake data, what would the query be?
UPDATE Users
SET 
    first_name = 'Alina',
    last_name = 'Rai',
    email = 'hotmilf@gmail.com',
    encrypted_password = 'sjkadjsahd',
    created_at = '2024-01-19',
    updated_at = '2024-01-20'
WHERE id = 1;

-- 4. What query would you run for updating all of the user records with the last_name of 'Choi'?
UPDATE Users
SET last_name = 'Choi';

-- 5. What query would you run for updating all the user records where ID is 3, 5, 7, 12, or 19?
UPDATE Users
SET 
	first_name = 'FakeAgent',
    last_name = 'FakeDoctor',
    email = 'Fake69@email.com',
    encrypted_password = 'notYourPassword',
    created_at = '2024-01-19',
    updated_at = '2024-01-20'
WHERE id IN (3, 5, 7, 12, 19);

-- 6. What's the query for deleting a user record where id = 1?
DELETE FROM Users
WHERE id = 1;

-- 7. What's the query for deleting the entire users records in the users table?
DELETE FROM Users;

-- 8. What's the query for dropping the entire users table?  What's the difference between dropping the table and deleting all records? 
DROP TABLE Users;
-- ANSWER: 'DROP TABLE' removes the entire table structure along with all its data. 'DELETE FROM Users' is used to remove all records from a table while keeping the table structure intact.

-- 9. What's the query for altering the email field to have it be 'email_address' instead?
ALTER TABLE Users
RENAME COLUMN email TO email_address;

-- 10. What's the query for altering the id so that it's a BIGINT instead?
ALTER TABLE Users
MODIFY COLUMN id BIGINT;

-- 11. What's the query for adding a new field to the users table called is_active where it's a Boolean (meaning it's either a 0 or a 1).  
-- Imagine you wanted the default value of this to be 0 when a new record is created and you won't allow this field to ever be NULL.  
-- With this in mind, now come up with a query.
ALTER TABLE Users
ADD COLUMN is_active BOOLEAN NOT NULL DEFAULT 0;

