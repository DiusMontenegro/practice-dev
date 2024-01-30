<?php
    session_start();
    require("connection.php");
    // register
    if (isset($_POST["action"]) && $_POST['action'] === 'register') {
        //first name
        function haveNumbers($str) {
            for ($i = 0; $i < strlen($str); $i++) {
                if (ctype_digit($str[$i])) {
                    return true;
                }
            }
            return false;
        }
        if (empty($_POST['first_name'])) {
            $errors[] = 'Please enter your first name.';
        } else if (haveNumbers($_POST['first_name'])) {
            $errors[] = "Invalid. Your first name should not contain any numbers.";
        } else if (strlen($_POST["last_name"]) < 2) {
            $errors[] = "Invalid. Your first name should not be less than 2 characters";
        }
        //last_name
        if (empty($_POST['last_name'])) {
            $errors[] = 'Please enter your last name.';
        } else if (haveNumbers($_POST['last_name'])) {
            $errors[] = "Invalid. Your last name should not contain any numbers.";
        } else if (strlen($_POST["last_name"]) < 2) {
            $errors[] = "Invalid. Your last name should not be less than 2 characters";
        }
        //email
        $email = $_POST['email'];
        $verifiedEmail = filter_var($email, FILTER_VALIDATE_EMAIL);
        if (empty($_POST['email'])) {
            $errors[] = 'Please enter your email address.';
        } else if (!$verifiedEmail) {
            $errors[] = 'Please enter a valid email address. Ex. email@123.com';
        }
        //phone number
        function haveLetters($str) {
            for ($i = 0; $i < strlen($str); $i++) {
                if (!ctype_digit($str[$i])) {
                    return true;
                }
            }
            return false;
        }
        if (empty($_POST["contact_number"])) {
            $errors[] = "Please enter your phone number.";
        } else if (
            haveLetters( $_POST["contact_number"]) ||
            strlen($_POST['contact_number']) !== 11
        ) {
            $errors[] = "Please enter a valid 11 digit phone number";
        }
        // password
        if (empty($_POST['password'])) {
            $errors[] = 'Please enter your password.';
        } else if (strlen($_POST["password"]) < 8) {
            $errors[] = "Invalid. Your password should not be less than 8 characters";
        }
        // error & success messages
        if (!empty($errors)) {
            $_SESSION['error_messages'] = $errors;
            $_SESSION['success'] = [];
            header('Location: ./index.php');
        } else {
            $_SESSION['error_messages'] = [];
            require_once("connection.php");
            $first_name = mysqli_real_escape_string($connection, $_POST['first_name']);
            $last_name = mysqli_real_escape_string($connection, $_POST['last_name']);
            $email = mysqli_real_escape_string($connection, $_POST['email']);
            $contact_number = mysqli_real_escape_string($connection, $_POST['contact_number']);
            $password = mysqli_real_escape_string($connection, $_POST['password']);
            $salt = bin2hex(openssl_random_pseudo_bytes(22));
            $encrypted_password = md5($password . '' . $salt);
            $query = "INSERT INTO users(first_name, last_name, email, contact_number, password, salt, encrypted_password, created_at, updated_at)
                VALUES ('$first_name', '$last_name', '$email', '$contact_number', '$password', '$salt', '$encrypted_password', NOW(), NOW())";
            if ($connection->query($query) === TRUE) {
                $_SESSION['success'] = "Success! A new user has been added";
            } else {
                $_SESSION['error'] = "Failed to connect to MySQL Error:" . $query . "<br>" . $connection->error;
            }
            header('Location: ./index.php');
        }
    } // login
    else if (isset($_POST["action"]) && $_POST['action'] === 'login') {
        // Get from data DB:
        $_SESSION['error_messages'] = [];
        require_once("connection.php");
        $email = mysqli_real_escape_string($connection, $_POST['email']);
        $password = mysqli_real_escape_string($connection, $_POST['password']);
        $query = "SELECT * FROM users WHERE email = '$email'";
        $result = $connection->query($query);
        if ($result->num_rows > 0) {
            $user = $result->fetch_assoc();
            $hashed_password = md5($password . '' . $user['salt']);
            if ($hashed_password === $user['encrypted_password']) {
                $_SESSION['user_id'] = $user['id'];
                $_SESSION['success'] = "Login successful!";
                header('Location: ./main.php');
                exit();
            } else {
                $_SESSION['error_login'] = "Incorrect password!";
            }
        } else {
            $_SESSION['error_login'] = "User with this email does not exist!";
        }
        header('Location: ./index.php');
    } // reset password request form.
    else if (isset($_POST['action']) && $_POST['action'] === 'reset') {
        require_once("connection.php");
        $email = mysqli_real_escape_string($connection, $_POST["email"]);
        $query = "SELECT * FROM users WHERE email = '$email'";
        $user = fetch_record($query);
        if ($user) {
            $_SESSION['type'] = 'email';
            $_SESSION['visibility'] = 'password';
            $_SESSION['message'] = "Success! we've sent you a V88 email reset form.";
            $_SESSION['message_color'] = 'success';
        } else {
            $_SESSION['message'] = "User with this email does not exist!";
            $_SESSION['message_color'] = 'error';
        }
        header('Location: ./reset-password.php');
    } else {
        session_destroy();
        header('Location: ./index.php');
    }
