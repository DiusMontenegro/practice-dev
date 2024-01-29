<?php
    session_start();
    require("./connection.php");
    //Subject title
    if (empty($_POST['subject'])) {
        $errors[] = 'Please enter a subject.';
    } else if (strlen($_POST['subject']) > 250) {
        $errors[] = "Yout title is too long.";
    }

    //Details
    if (empty($_POST['details'])) {
        $errors[] = 'Please enter the details.';
    } else if (strlen($_POST['details']) > 500) {
        $errors[] = "Details are too long.";
    }

    // Current date
    date_default_timezone_set('Asia/Manila');
    $current_date = date('m-d-Y');

    // Error and Success messages
    if (!empty($errors)) {
        $_SESSION['error_messages'] = $errors;
        $_SESSION['success'] = [];
        header('Location: ./index.php');
    } else {
        $_SESSION['error_messages'] = [];
        $_SESSION['date'] = $current_date;
        require_once("connection.php");
        $subject = mysqli_real_escape_string($connection, $_POST['subject']);
        $details = mysqli_real_escape_string($connection, $_POST['details']);
        $created_at = mysqli_real_escape_string($connection, $_SESSION['date']);
        $query = "INSERT INTO bulletin( title, details, created_at )
            VALUES ('$subject', '$details', '$created_at')";
        if ($connection->query($query) === TRUE) {
            $_SESSION['success'] = "Success! A new entry has been added to the Raffle Event!";
        } else {
            $_SESSION['error'] = "Failed to connect to MySQL Error:" . $query . "<br>" . $connection->error;
        }
        header('Location: ./main.php');
    }

    //Get all data from the database
    $allData = "SELECT * FROM bulletin ORDER BY id DESC";
    $_SESSION['bulletin'] = fetch_all($allData);

    //skip
    if (isset($_POST['skip'])) {
        header('Location: ./main.php');
    }

    //add-new
    if (isset($_POST['add-new'])) {
        $_SESSION['error_messages'] = [];
        header('Location: ./index.php');
    }

