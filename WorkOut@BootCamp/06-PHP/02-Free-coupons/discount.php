<?php
    session_start();
    if ($_SESSION['count'] <= 0) {
        $_SESSION['discount_code'] = 'Unavailable';
        $_SESSION['discount_message'] = 'Sorry';
        $_SESSION['count'] = 10;
    } 
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coupons</title>
    <link rel="stylesheet" href="./main.css.php">
</head>
<body>
    <form action="./index.php" method="POST">
        <h1>Welcome Customer!</h1>
        <p>We're giving away <strong>free coupons</strong></p>
        <p>as a token of appreciation</p>
        <div class="discount">
            <h4><?= $_SESSION['discount_message']?></h4>
            <h2><?=$_SESSION['discount_code']?></h2>    
            <input id="reset" type="submit" name='reset' value="Reset count">
            <input id="claim" type="submit" value="Claim again">
        </div>
    </form>
</body>
</html>