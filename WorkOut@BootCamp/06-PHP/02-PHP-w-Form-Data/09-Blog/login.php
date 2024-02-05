<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="login.css.php">
</head>
<body>
    <main>
        <aside>
            <div id="messages">
<?php   if (!empty($_SESSION['error_messages'])) {
            foreach ($_SESSION['error_messages'] as $error) {?>
                <p><?= $error ?></p>
<?php       }
        } else if (isset($_SESSION['success'])) {?>
                <p><?= $_SESSION['success'] ?></p>
<?php   } else if (isset($_SESSION['message']))  {?>
                <p><?= $_SESSION['message'] ?></p>
<?php   }   unset($_SESSION['message']);
            unset( $_SESSION['success'] );
            unset( $_SESSION['error_messages'] );?>
            </div>
            <h1>Elevate Every Drive</h1>
            <h4>Experience Escalade Luxury!</h4>
            <h4>Reserve Yours Now!</h4>
        </aside>
        <aside id="forms">
            <form action="./process.php" method="POST">
                <input type="hidden" name="action" value="login">
                <input type="text" name="email" placeholder="Enter your email">
                <input type="password" name="password" placeholder="Enter your password">
                <input id="login" type="submit" value="Log in">
            </form>
            <a href="./index.php">Go to main page</a>
            <form id="register-form" action="./process.php" method="POST">
                <h2>Register Now</h2>
                <input type="hidden" name="action" value="register">
                <input type="text" name="first_name" placeholder="Enter your first name">
                <input type="text" name="last_name" placeholder="Enter your last name">
                <input id="email" type="text" name="email" placeholder="Enter your email">
                <input id="password" type="password" name="password" placeholder="Enter your password">
                <input id="login" type="submit" value="Sign Up">
            </form>
        </aside>
    </main>
</body>
</html>
