<?php
    session_start();
    require("connection.php");
    date_default_timezone_set('Asia/Manila');
    $current_datetime = date('F j, Y g:i A');
    $_SESSION['dateTime'] = $current_datetime;
    //upload file
    if (isset($_POST["action"]) && $_POST['action'] === 'upload') {
        //full name
        function haveNumbers($str) {
            for ($i = 0; $i < strlen($str); $i++) {
                if (ctype_digit($str[$i])) {
                    return true;
                }
            }
            return false;
        } // full_name
        if (empty($_POST['full_name'])) {
            $errors[] = 'Please enter your full name.';
        } else if (haveNumbers($_POST['full_name'])) {
            $errors[] = "Invalid. Your full name should not contain any numbers.";
        } else if (strlen($_POST["full_name"]) < 2) {
            $errors[] = "Invalid. Your full name should not be less than 2 characters";
        }
        // extension (.csv)
        if (empty($_POST['csv'])) {
            $errors[] = 'Please choose a .csv file.';
        } else if ($_POST['csv']) {
            $uploadedFile = $_POST['csv'];
            $fileExtension = pathinfo($uploadedFile, PATHINFO_EXTENSION);
            if (strtolower($fileExtension) !== 'csv') {
                $errors[] = 'Invalid file type. Please choose a .csv file.';
            }
        }
        // error & success messages
        if (!empty($errors)) {
            $_SESSION['error_messages'] = $errors;
            $_SESSION['success'] = [];
            $_SESSION['status'] = 'error';
            header('Location: ./index.php');
        } else {
            $_SESSION['error_messages'] = [];
            $full_name = mysqli_real_escape_string($connection, $_POST['full_name']);
            $csv = mysqli_real_escape_string($connection, $_POST['csv']);
            $dateTime = mysqli_real_escape_string($connection, $_SESSION['dateTime']);
            $query = "INSERT INTO files(author, csv, created_at)
                VALUES ('$full_name', '$csv', '$dateTime')";
            if ($connection->query($query) === TRUE) {
                $_SESSION['success'] = "Success! A new csv file has been added";
            } else {
                $_SESSION['error_messages'] = "Failed to connect to MySQL Error:" . $query . "<br>" . $connection->error;
            }
            $_SESSION['status'] = 'success';
        }
        header('Location: ./index.php');
    } // view csv
    else if (isset($_POST["action"]) && $_POST['action'] === 'view') {
        $_SESSION['file'] = $_POST['file'];
        header('Location: ./main.php');
    } else {
        session_destroy();
        header('Location: ./index.php');
    }
