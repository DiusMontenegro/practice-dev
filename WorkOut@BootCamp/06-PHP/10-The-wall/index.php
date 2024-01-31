<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wall Login</title>
    <link rel="stylesheet" href="./main.css.php">
</head>
<body>
    <main>
        <div class="heading">
            <div class="messages">
<?php   if (!empty($_SESSION['error_messages'])) {
            foreach ($_SESSION['error_messages'] as $error) {?>
                <p class=<?= $_SESSION['status'] ?>><?= $error ?></p>
<?php       }
        } else if (isset($_SESSION['success'])) {?>
                <p class=<?= $_SESSION['status'] ?>><?= $_SESSION['success'] ?></p>
<?php   } else if (isset($_SESSION['message']))  {?>
                <p class=<?= $_SESSION['status'] ?>><?= $_SESSION['message'] ?></p>
<?php   }   unset($_SESSION['message']);
            unset( $_SESSION['success'] );
            unset( $_SESSION['error_messages'] );?>
            </div>
            <h2>Walls that Talk</h2>
            <h5>Unveiling Secrets Brick by Brick.</h5>
            <h5>The Stories Our Walls Hold.</h5>
        </div>
        <div class="forms">
            <form action="./process.php" method="POST">
                <input type="hidden" name="action" value="login">
                <input name="email" type="email" placeholder="Enter your email" required>
                <input name="password" type="password" placeholder="Enter your password">
                <input class="btn" type="submit" value="Log In">
            </form>
            <form id="sign_up" action="./process.php" method="POST">
                <h6>Register Now</h6>
                <h6 class="signup">Get Access to the wall.</h6>
                <input type="hidden" name="action" value="register">
                <input id="first_name" name="first_name" type="text" placeholder="First name">
                <input id="last_name" name="last_name" type="text" placeholder="Last name">
                <input type="email" name="email" placeholder="Enter your email">
                <input type="password" name="password" placeholder="Enter your password">
                <input type="password" name="confirm_password" placeholder="Confirm your password">
                <input class="btn" type="submit" value="Sign Up">
            </form>
        </div>
    </main>
</body>
</html>
