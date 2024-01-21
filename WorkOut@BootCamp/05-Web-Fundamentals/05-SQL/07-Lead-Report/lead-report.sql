-- 1. What query would you run to get all the sites that client=15 owns?
SELECT 
	domain_name AS website, 
    client_id 
FROM sites 
WHERE client_id = 15;

-- 2. What query would you run to get total count of domain created for June 2011?
SELECT 
    MONTHNAME(created_datetime) AS month, 
    COUNT(domain_name) AS total_count 
FROM sites
WHERE MONTH(created_datetime) = 6 
    AND YEAR(created_datetime) = 2011 
GROUP BY MONTH(created_datetime);

-- 3.  What query would you run to get the total revenue for the date November 19th 2012?
SELECT 
    date(charged_datetime), 
    SUM(amount) AS revenue 
FROM billing
WHERE DAY(charged_datetime) = 19
    AND MONTH(charged_datetime) = 11 
    AND YEAR(charged_datetime) = 2012 
GROUP BY MONTH(charged_datetime);

-- 4. What query would you run to get total revenue earned monthly each year for the client with an id of 1?
SELECT
	client_id,
    SUM(amount) AS total_revenue,
    MONTHNAME(charged_datetime) AS month,
    YEAR(charged_datetime) AS year
FROM billing
WHERE client_id = 1
GROUP BY month;

-- 5. What query would you run to get total revenue of each client every month per year? Order it by client id.
SELECT
	CONCAT(clients.first_name, " ", clients.last_name) AS client_name,
    SUM(billing.amount) AS total_revenue,
    MONTHNAME(charged_datetime) AS month_charged,
    YEAR(charged_datetime) AS year
FROM clients
JOIN billing ON clients.client_id = billing.client_id
GROUP BY month_charged, year, clients.client_id
ORDER BY clients.client_id ASC, year, MONTH(charged_datetime); 

-- 6. What query would you run to get which sites generated leads between March 15, 2011 to April 15, 2011? Show how many leads for each site. 
SELECT 
    sites.domain_name AS website, 
    COUNT(leads.leads_id) AS number_of_leads
FROM leads 
JOIN sites ON leads.site_id = sites.site_id
WHERE leads.registered_datetime BETWEEN '2011-03-15' AND '2011-04-15'
GROUP BY leads.leads_id
ORDER BY CHAR_LENGTH(website) DESC;

-- 7. What query would you run to show all the site owners, the site name(s), and the total number of leads generated from each site for all time? 
SELECT 
	CONCAT(clients.first_name, " ", clients.last_name) AS client_name, 
    domain_name, 
    COUNT(leads_id) AS num_leads
FROM leads 
JOIN sites ON leads.site_id = sites.site_id
JOIN clients ON sites.client_id = clients.client_id
GROUP BY domain_name 
ORDER BY clients.client_id, domain_name;

-- 8. What query would you run to get a list of site owners who had leads, and the total of each for the whole 2012?
SELECT 
	CONCAT(clients.first_name, " ", clients.last_name) AS client,
    COUNT(leads.leads_id) AS number_of_leads
FROM clients
JOIN sites ON clients.client_id = sites.client_id
JOIN leads ON sites.site_id = leads.site_id
WHERE YEAR(registered_datetime) = '2012'
GROUP BY client
ORDER BY clients.client_id;

-- 9. What query would you run to get a list of site owners and the total # of leads we've generated for each owner per month for the first half of Year 2012?
SELECT 
    CONCAT(clients.first_name, " ", clients.last_name) AS client, 
    COUNT(leads.leads_id) AS num_of_leads, 
    MONTHNAME(registered_datetime) AS month
FROM clients
JOIN sites ON clients.client_id = sites.client_id
JOIN leads ON sites.site_id = leads.site_id 
WHERE YEAR(registered_datetime) = 2012 
    AND MONTH(registered_datetime) BETWEEN 1 AND 6 
GROUP BY CONCAT(clients.first_name, " ", clients.last_name), month
ORDER BY MONTH(registered_datetime) ASC, client;

-- 10. Write a single query that retrieves all the site names that each client owns and its total count. Group the results so that each row shows a new client. (Tip: use GROUP_CONCAT).
SELECT 
	CONCAT(clients.first_name, " ", clients.last_name) AS client_name, 
    COUNT(domain_name) AS number_of_sites,
    GROUP_CONCAT(domain_name SEPARATOR ",") AS sites 
FROM clients 
LEFT JOIN sites ON clients.client_id = sites.client_id 
GROUP BY CONCAT(clients.first_name, " ", clients.last_name)
ORDER BY clients.client_id;


 
  



