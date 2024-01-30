<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Facebool</title>
    <link rel="stylesheet" href="main.css.php">
</head>
<body id="login-page">
    <main class="container">
        <div id="headings">
            <div id='alerts'>
<?php   if (!empty($_SESSION['error_messages'])) {
            foreach ($_SESSION['error_messages'] as $error) {?>
                <p class='errors'><?= $error?></p>
<?php
            }
            unset( $_SESSION['error_messages'] );
            unset( $_SESSION['success'] );
            unset( $_SESSION['error_login']);
        } else if (isset($_SESSION['success'])) {?>
                <p class='success'><?= $_SESSION['success'] ?></p>
<?php       unset( $_SESSION['error_messages'] );
            unset( $_SESSION['success'] );
            unset( $_SESSION['error_login']);
        } else if (isset($_SESSION['error_login']))  {  ?>
                <p class='errors'><?= $_SESSION['error_login'] ?></p>
<?php   }   unset( $_SESSION['error_messages'] );
            unset( $_SESSION['success'] );
            unset( $_SESSION['error_login']); ?>
            </div>
            <h1>Facebool</h1>
            <h3>Where Photos Say More Than Words...</h3>
            <h3>Sometimes Too Much!</h3>
        </div>
        <div id="forms">
            <form id="login-form" action="./process.php" method='POST'>
                <input type="hidden" name="action" value="login">
                <input type="text" name="email" placeholder="Enter your email">
                <input type="password" name="password" placeholder="password">
                <input id="log-in" type="submit" name="log-in" value="Log In">
            </form>
            <a href="./reset-password.php"><input id="reset" type="button" value="Forgot Password?"></a>
            <form id="registration" action="./process.php" method="POST">
                <h5>Sign Up</h5>
                <h6>It's quick and easy</h6>
                <input type="hidden" name="action" value="register">
                <input type="text" name="first_name" placeholder="First Name">
                <input type="text" name="last_name" placeholder="Last Name">
                <input id="registration-email" name="email" type="text" placeholder="Email address">
                <input id="contact_number" name="contact_number" type="text" placeholder="Enter your phone number">
                <input id="password" name="password" type="password" placeholder="password">
                <input type="submit" name="register" id="register" value="Sign Up">
            </form>
        </div>
    </main>
</body>
</html>
