<?php
    session_start();
    require("connection.php");
    date_default_timezone_set('Asia/Manila');
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
            header('Location: ./login.php');
        } else {
            $_SESSION['error_messages'] = [];
            require_once("connection.php");
            $first_name = mysqli_real_escape_string($connection, $_POST['first_name']);
            $last_name = mysqli_real_escape_string($connection, $_POST['last_name']);
            $email = mysqli_real_escape_string($connection, $_POST['email']);
            $password = mysqli_real_escape_string($connection, $_POST['password']);
            $salt = bin2hex(openssl_random_pseudo_bytes(22));
            $encrypted_password = md5($password . '' . $salt);
            $query = "INSERT INTO users(first_name, last_name, email, password, salt, encrypted_password, created_at, updated_at)
                VALUES ('$first_name', '$last_name', '$email', '$password', '$salt', '$encrypted_password', NOW(), NOW())";
            if ($connection->query($query) === TRUE) {
                $_SESSION['success'] = "Success! A new user has been added";
            } else {
                $_SESSION['error'] = "Failed to connect to MySQL Error:" . $query . "<br>" . $connection->error;
            }
            header('Location: ./login.php');
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
        $user = fetch_record($query);
        if ($user) {
            $hashed_password = md5($password . '' . $user['salt']);
            if ($hashed_password === $user['encrypted_password']) {
                $_SESSION['user_id'] = $user['id'];
                $_SESSION['first_name'] = $user['first_name'];
                $_SESSION['full_name'] = $user['first_name']." ".$user['last_name'];
                $_SESSION['visibility'] = 'visible';
                $_SESSION['log'] = 'Log Out';
                header('Location: ./index.php');
                exit();
            } else {
                $_SESSION['message'] = "Incorrect password!";
                header('Location: ./login.php');
                exit();
            }
        } else {
            $_SESSION['message'] = "User with this email does not exist!";
        }
        header('Location: ./login.php');
    } else if (isset($_POST["action"]) && $_POST['action'] === 'review') {
        $current_datetime = date('m-d-Y h:i:s a');
        $_SESSION['dateTime'] = $current_datetime;
        $review = mysqli_real_escape_string($connection, $_POST['review']);
        $user_id = mysqli_real_escape_string($connection, $_SESSION['user_id']);
        $fullName = mysqli_real_escape_string($connection, $_SESSION['full_name']);
        $dateTime = mysqli_real_escape_string($connection, $_SESSION['dateTime']);
        $query = "INSERT INTO reviews(user_id, full_name, context, created_at, updated_at)
            VALUES ('$user_id', '$fullName', '$review', '$dateTime', '$dateTime')";
        run_mysql_query($query);
        header('Location: ./index.php');
    } else if (isset($_POST["action"]) && $_POST['action'] === 'reply') {
        $current_datetime = date('m-d-Y h:i:s a');
        $_SESSION['dateTime'] = $current_datetime;
        $reviewId = mysqli_real_escape_string($connection, $_POST['reviewId']);
        $content = mysqli_real_escape_string($connection, $_POST['reply']);
        $user_id = mysqli_real_escape_string($connection, $_SESSION['user_id']);
        $fullName = mysqli_real_escape_string($connection, $_SESSION['full_name']);
        $dateTime = mysqli_real_escape_string($connection, $_SESSION['dateTime']);
        $query = "INSERT INTO replies(review_id, user_id, full_name, content, created_at, updated_at)
            VALUES ('$reviewId','$user_id', '$fullName', '$content', '$dateTime', '$dateTime')";
        run_mysql_query($query);
        header('Location: ./index.php');
    }
    else {
        session_destroy();
        header('Location: ./login.php');
    }
