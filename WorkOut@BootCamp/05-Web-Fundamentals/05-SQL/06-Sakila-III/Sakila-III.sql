-- 1. How many customers are there for each country? Have your result display the full country name and the number of customers for each country.
SELECT 
	country.country, 
    COUNT(customer_id) AS total_number_of_customers 
FROM customer 
JOIN address ON customer.address_id = address.address_id
JOIN city ON address.city_id = city.city_id
JOIN country ON city.country_id = country.country_id
GROUP BY country.country;

-- 2. How many customers are there for each city? Have your result display the full city name, the full country name, as well as the number of customers for each city.
-- The resultset should show 1 total for each city, except:
-- - Australia's Woodridge = 0
-- - Canada's Lethbridge and London = 0
-- - United Kingdom's London = 2
-- - United State's Aurora = 2
SELECT 
    country.country, 
    city.city, 
    COUNT(customer_id) AS total_customer 
FROM customer 
JOIN address ON customer.address_id = address.address_id
JOIN city ON address.city_id = city.city_id
JOIN country ON city.country_id = country.country_id
GROUP BY city.city;

-- ** Now, look at the payment table where it has information about the customer as well as how much the customer paid to rent the item. Based on this **

-- 1. Retrieve both the average rental amount, the total rental amount, as well as the total number of transactions for each month of each year.
SELECT 
	DATE_FORMAT(payment_date, '%M-%Y') AS month_and_year, 
    SUM(amount) AS total_rental_amount, 
    COUNT(payment_id) AS total_transactions, 
    AVG(amount) AS average_rental_amount 
FROM payment 
GROUP BY DATE_FORMAT(payment_date, "%M-%Y");

-- 2. Your manager comes and asks you to pull payment report based on the hour of the day. The managers wants to know which hour the company earns the most money/payment.Have your sql query generate the top 10 hours of the day with the most sales.  Have the first row of your result be the hour with the most payments received.**
SELECT 
	HOUR(payment_date) AS hour_of_the_day, 
	SUM(amount) AS total_payments_received
FROM payment 
GROUP BY HOUR(payment_date) 
ORDER BY SUM(amount) DESC 
	LIMIT 10;