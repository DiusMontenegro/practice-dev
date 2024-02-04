<?php
    session_start();
    if (!isset($_SESSION["type"])) {
        $_SESSION['type'] = "email";
        $_SESSION['visibility'] = 'hidden';
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset your password</title>
    <link rel="stylesheet" href="reset-page.css.php">
</head>
<body id="reset-page">
    <main>
<?php   if (isset($_SESSION['message'])) {?>
        <p id=<?= $_SESSION['message_color'] ?>><?= $_SESSION['message'] ?></p>
<?php   } unset($_SESSION['message'])?>
        <form action="./process.php" method="POST">
            <h2>Forgot your password?</h2>
            <input type="hidden" name="action" value="reset">
            <input type=<?= $_SESSION['type'] ?> name="email" id="email" placeholder="Enter your email">
            <input type="submit" name="reset-password" id="reset-password" value="Reset Password">
        </form>
        <a href="./process.php">Back</a>
    </main>
</body>
</html>
