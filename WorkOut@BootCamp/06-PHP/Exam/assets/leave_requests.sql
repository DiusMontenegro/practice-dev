-- Create database
CREATE DATABASE IF NOT EXISTS leave_requests;
USE leave_requests;

-- Create table
CREATE TABLE IF NOT EXISTS requests (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name VARCHAR(255),
    request_date VARCHAR(255),
    from_date VARCHAR(255),
    to_date VARCHAR(255),
    leave_type VARCHAR(255)
);

INSERT INTO requests (name, request_date, from_date, to_date, leave_type)
VALUES
    ('John Doe', '01/28/2024', '01/30/2024', '02/01/2024', 'Vacation'),
    ('Jane Smith', '01/29/2024', '02/05/2024', '02/10/2024', 'Paid Leave'),
    ('Alice Johnson', '01/30/2024', '02/15/2024', '02/20/2024', 'Sick Leave'),
    ('Bob Wilson', '01/31/2024', '02/22/2024', '02/24/2024', 'Half Day Unpaid'),
    ('Charlie Brown', '02/01/2024', '02/25/2024', '02/28/2024', 'Unpaid Leave'),
    ('David Lee', '02/02/2024', '03/01/2024', '03/01/2024', 'Vacation'),
    ('Emma White', '02/03/2024', '02/10/2024', '02/15/2024', 'Paid Leave'),
    ('Frank Miller', '02/04/2024', '02/18/2024', '02/20/2024', 'Sick Leave'),
    ('Grace Turner', '02/05/2024', '02/22/2024', '02/24/2024', 'Half Day Unpaid'),
    ('Henry Davis', '02/06/2024', '02/26/2024', '02/28/2024', 'Unpaid Leave'),
    ('Isabel Baker', '02/07/2024', '02/29/2024', '03/01/2024', 'Vacation'),
    ('Jack Wilson', '02/08/2024', '02/12/2024', '02/14/2024', 'Paid Leave'),
    ('Karen Johnson', '02/09/2024', '02/16/2024', '02/18/2024', 'Sick Leave'),
    ('Larry Brown', '02/10/2024', '02/20/2024', '02/22/2024', 'Half Day Unpaid'),
    ('Megan Lee', '02/11/2024', '02/24/2024', '02/26/2024', 'Unpaid Leave'),
    ('Nancy White', '02/12/2024', '02/28/2024', '02/29/2024', 'Vacation'),
    ('Oscar Miller', '02/13/2024', '02/17/2024', '02/18/2024', 'Paid Leave'),
    ('Paul Turner', '02/14/2024', '02/20/2024', '02/21/2024', 'Sick Leave'),
    ('Quinn Davis', '02/15/2024', '02/25/2024', '02/27/2024', 'Half Day Unpaid'),
    ('Rachel Baker', '02/16/2024', '02/28/2024', '02/29/2024', 'Unpaid Leave');
