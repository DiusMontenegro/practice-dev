<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Raffle</title>
  <link rel="stylesheet" href="./main.css.php">
</head>
<body id="create-entry">
<?php   if (!empty($_SESSION['error_messages'])) {
        foreach ($_SESSION['error_messages'] as $errors) {
?>
    <p><?= $errors ?></p>
<?php }} ?>
    <form action="./process.php" method="POST">
        <img id="plane-ticket" src="./img/ticket.png" alt="planeticket">
        <h1>Raffle Entry</h1>
        <label for="first_name">First Name:</label>
        <input id="first_name" name="first_name" type="text" placeholder="Enter your first name">
        <label for="last_name">Last Name:</label>
        <input id="last_name" name="last_name" type="text" placeholder="Enter your last name">
        <label for="contact_number">Contact Number:</label>
        <input id="contact_number" name="contact_number" type="text" placeholder="Ex. 09707833642">
        <label for="date">Date:</label>
        <input id="date" name="date" type="text" placeholder='mm/dd/yyyy'>
        <input id="submit" type="submit" value="Submit">
    </form>
</body>
</html>
