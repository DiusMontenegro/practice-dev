<?php
    session_start();
    // date
    $inputdate = $_POST['date'];
    $date = DateTIME::createFromFormat('m/d/Y', $inputdate);
    var_dump($_POST);
    if (empty($_POST['date'])) {
        $errors[] = 'Please enter the date';
    } else if (!$date) {
        $errors[] = 'Invalid date format. Please Follow the format (mm/dd/yyyy)';
    }

    // first_name
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
    }

    //last_name
    if (empty($_POST['last_name'])) {
        $errors[] = 'Please enter your last name.';
    } else if (haveNumbers($_POST['last_name'])) {
        $errors[] = "Invalid. Your last name should not contain any numbers.";
    }

    //email
    $email = $_POST['email'];
    $verifiedEmail = filter_var($email, FILTER_VALIDATE_EMAIL);
    if (empty($_POST['email'])) {
        $errors[] = 'Please enter your email address.';
    } else if (!$verifiedEmail) {
        $errors[] = 'Please enter a valid email address. Ex. email@123.com';
    }

    // issue
    if (empty($_POST['issue'])) {
        $errors[] = 'Please include a title.';
    } else if (strlen($_POST['issue']) > 50) {
        $errors[] = 'Invalid. Issue title is too long';
    }
    
    //issue_details
    if (empty($_POST['issue_details'])) {
        $errors[] = 'Please let me know how we can improve.';
    } else if (strlen($_POST['issue_details']) > 250) {
        $errors[] = 'Invalid. details title are too long';
    } 

    if (!empty($errors)) {
        $_SESSION['error_messages'] = $errors;
        $_SESSION['success'] = [];
        header('Location: ./index.php');
    } else {
        $_SESSION['error_messages'] = [];
        $_SESSION['success'] = '"Thank you for your patience! Please wait for a response from our IT team."';
        header('Location: ./index.php');
    }
// session_destroy();
?>


