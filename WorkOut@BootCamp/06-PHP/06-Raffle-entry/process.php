<?php
session_start();
// first_name
function haveNumbers($str)
{
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
}

//last_name
if (empty($_POST['last_name'])) {
    $errors[] = 'Please enter your last name.';
} else if (haveNumbers($_POST['last_name'])) {
    $errors[] = "Invalid. Your last name should not contain any numbers.";
}

//number
function haveLetters($str)
{
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
    $errors[] = "Please enter a valid 11 digit number";
}

// date
date_default_timezone_set('Asia/Manila');
$inputdate = $_POST['date'];
$current_time = date('h:i:s a');
$date = DateTIME::createFromFormat('m/d/Y', $inputdate);
var_dump($_POST);
if (empty($_POST['date'])) {
    $errors[] = 'Please enter the date';
} else if (!$date) {
    $errors[] = 'Invalid date format. Please Follow the format (mm/dd/yyyy)';
} else {
    $date_with_time = $inputdate . ' ' . $current_time;
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
    $contact_number = mysqli_real_escape_string($connection, $_POST['contact_number']);
    $created_at = mysqli_real_escape_string($connection, $date_with_time);
    $query = "INSERT INTO entries(first_name, last_name, contact_number, created_at)
        VALUES ('$first_name', '$last_name', '$contact_number', '$created_at')";
    if ($connection->query($query) === TRUE) {
        $_SESSION['success'] = "Success! A new entry has been added to the Raffle Event!";
    } else {
        $_SESSION['error'] = "Failed to connect to MySQL Error:" . $query . "<br>" . $connection->error;
    }
    header('Location: ./entry.php');
}
//delete button
if (isset($_POST['delete'])) {
    require_once("connection.php");
    $phone = intval($_POST['delete']);
    $deleteQuery = "DELETE FROM entries WHERE contact_number = $phone";
    if ($connection->query($deleteQuery) === TRUE) {
        $_SESSION['success'] = "Success! Entry with phone number 0$phone has been deleted.";
    } else {
        $_SESSION['error'] = "Failed to delete entry with phone number 0$phone. Error: " . $connection->error;
    }
    header('Location: ./entry.php');
}
//back button
if (isset($_POST['back'])) {
    $_SESSION['error_messages'] = [];
    $_SESSION['success'] = [];
    header('Location: ./index.php');
}
$allData = "SELECT * FROM entries";
$_SESSION['entries'] = fetch_all($allData);
var_dump($_SESSION['record']);
$connection->close();
