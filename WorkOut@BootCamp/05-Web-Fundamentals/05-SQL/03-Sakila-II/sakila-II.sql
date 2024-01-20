-- 1. Get all the list of customers.
SELECT * FROM customer;

-- 2. Get all the list of customers as well as their address.
SELECT CONCAT(first_name, ' ', last_name) AS customer_name, address
FROM address
JOIN customer ON customer.address_id = address.address_id;

-- 3. Get all the list of customers as well as their address and the city name.
SELECT 
    CONCAT(customer.first_name, ' ', customer.last_name) AS customer_name, 
    address.address,
    city.city
FROM customer
JOIN address ON customer.address_id = address.address_id
JOIN city ON address.city_id = city.city_id;

-- 4. Get all the list of customers, as well as their address, city name, and country.
SELECT 
    CONCAT(customer.first_name, ' ', customer.last_name) AS customer_name, 
    address.address,
    city.city,
    country.country
FROM customer
JOIN address ON customer.address_id = address.address_id
JOIN city ON address.city_id = city.city_id
JOIN country ON city.country_id = country.country_id;

-- 5. Get all the list of customers who live in Bolivia.
SELECT 
    CONCAT(customer.first_name, ' ', customer.last_name) AS customer_name, 
    address.address,
    city.city,
    country.country
FROM customer
JOIN address ON customer.address_id = address.address_id
JOIN city ON address.city_id = city.city_id
JOIN country ON city.country_id = country.country_id
WHERE country = 'Bolivia';

-- 6. Get all the list of customers who live in Bolivia, Germany and Greece.
SELECT 
    CONCAT(customer.first_name, ' ', customer.last_name) AS customer_name, 
    address.address,
    city.city,
    country.country
FROM customer
JOIN address ON customer.address_id = address.address_id
JOIN city ON address.city_id = city.city_id
JOIN country ON city.country_id = country.country_id
WHERE country IN ('Bolivia', 'Germany', 'Greece');

-- 7. Get all the list of customers who live in the city of Baku.
SELECT 
    CONCAT(customer.first_name, ' ', customer.last_name) AS customer_name, 
    address.address,
    city.city,
    country.country
FROM customer
JOIN address ON customer.address_id = address.address_id
JOIN city ON address.city_id = city.city_id
JOIN country ON city.country_id = country.country_id
WHERE city = 'Baku';

-- 8. Get all the list of customers who live in the city of Baku, Beira, and Bergamo.
SELECT 
    CONCAT(customer.first_name, ' ', customer.last_name) AS customer_name, 
    address.address,
    city.city,
    country.country
FROM customer
JOIN address ON customer.address_id = address.address_id
JOIN city ON address.city_id = city.city_id
JOIN country ON city.country_id = country.country_id
WHERE city IN ('Baku', 'Beira', 'Bergamo');

-- 9.  Get all the list of customers who live in a country where the country name's length is less than 5. Show the customer with the longest full name first. (Hint: Look into how you can concatenate a string in SQL).
SELECT 
    CONCAT(customer.first_name, ' ', customer.last_name) AS customer_name, 
    country.country,
    CHAR_LENGTH(country.country) AS country_name_length
FROM customer
JOIN address ON customer.address_id = address.address_id
JOIN city ON address.city_id = city.city_id
JOIN country ON city.country_id = country.country_id
WHERE CHAR_LENGTH(country.country) < 5
	ORDER BY CHAR_LENGTH(CONCAT(customer.first_name, ' ', customer.last_name)) DESC;

-- 10. Get all the list of customers who live in a city name whose length is more than 10. Order the result so that the customers who live in the same country are shown together.
SELECT 
    CONCAT(customer.first_name, ' ', customer.last_name) AS customer_name, 
    country.country,
    city.city,
    CHAR_LENGTH(city.city) AS city_name_length
FROM customer
JOIN address ON customer.address_id = address.address_id
JOIN city ON address.city_id = city.city_id
JOIN country ON city.country_id = country.country_id
WHERE CHAR_LENGTH(city.city) > 10
	ORDER BY country.country ASC;

-- 11. Get all the list of customers who live in a city where the city name includes the word 'ba'. For example Arratuba or Baiyin should show up in your result.
SELECT 
    CONCAT(customer.first_name, ' ', customer.last_name) AS customer_name, 
    city.city
FROM customer
JOIN address ON customer.address_id = address.address_id
JOIN city ON address.city_id = city.city_id
WHERE city.city LIKE '%ba%'

-- 12. Get all the list of customers where the city name includes a space. Order the result so that customers who live in the longest city are shown first.
SELECT 
    CONCAT(customer.first_name, ' ', customer.last_name) AS customer_name, 
    city.city,
    CHAR_LENGTH(city.city) AS city_name_length
FROM customer
JOIN address ON customer.address_id = address.address_id
JOIN city ON address.city_id = city.city_id
WHERE city.city LIKE '% %'
	ORDER BY CHAR_LENGTH(city.city) DESC;

-- 13. Get all the customers where the country name is longer than the city name.
SELECT 
    CONCAT(customer.first_name, ' ', customer.last_name) AS customer_name, 
	city.city,
    country.country,
    CHAR_LENGTH(city.city) AS city_name_length,
    CHAR_LENGTH(country.country) AS country_name_length
FROM customer
JOIN address ON customer.address_id = address.address_id
JOIN city ON address.city_id = city.city_id
JOIN country ON city.country_id = country.country_id
WHERE CHAR_LENGTH(country.country) > CHAR_LENGTH(city.city);