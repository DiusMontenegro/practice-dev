<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bug Ticket</title>
    <link rel="stylesheet" href="./main.css.php">
</head>
<body>
<?php   if (!empty($_SESSION['error_messages'])) {
        foreach ($_SESSION['error_messages'] as $errors) {
?>
    <p><?= $errors ?></p>    
<?php 
        }
        } else if (isset($_SESSION['success'])) { ?>
    <h5><?= $_SESSION['success'] ?></h5>
<?php   } ?>
    <form action="./process.php" method="POST">
        <h1>Bug Report Form</h1>
        <label for="date">Date:*</label>
        <input id="date" type="text" name="date" placeholder="mm/dd/yyyy">
        <label for="first_name">First Name:*</label>
        <input id="first_name" type="text" name="first_name" placeholder="Your First Name">
        <label for="last_name">Last Name:*</label>
        <input id="last_name" type="text" name="last_name" placeholder="Your Last Name">
        <label for="email">Email:*</label>
        <input id="email" type="text" name="email" placeholder="Email">
        <label for="issue">Issue title:*</label>
        <input id="issue" type="text" name="issue" placeholder="max. 50 characters">
        <label for="issue_details">Issue details:*</label>
        <textarea name="issue_details" id="issue_details" placeholder="max. 250 characters"></textarea>
        <input id="submit" type="submit">
    </form>
</body>
</html>