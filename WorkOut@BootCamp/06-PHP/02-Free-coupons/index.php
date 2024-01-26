<?php
    session_start();
    if (!isset($_SESSION['count']) || isset($_POST['reset'])) {
        $_SESSION['count'] = 10;
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Free Coupons</title>
    <link rel="stylesheet" href="./main.css.php">
</head>
<body>
    <form method="POST" action="./process.php">
        <h1>Welcome Customer!</h1>
        <p>We're giving away <strong>free coupons</strong></p>
        <p>as a token of appreciation</p>
        <p>for first <?= $_SESSION['count']?> customer(s)</p>
        <div >
            <h3>Kindly type your name:</h3>
            <input type="text" name='name'>
            <input id="submit" type="submit" value="Submit">
        </div>
    </form>
</body>
</html>