<?php
    session_start();
    $luck = rand(0, 1);
    $_SESSION['rewards'] = array (
        'low' => rand(0, 100),
        'moderate' => rand(0, 1000),
        'high' => rand(0, 2500),
        'severe' => rand(0, 5000)
    );
    date_default_timezone_set('Asia/Manila');
    if (isset($_POST['reset'])) {
        $_SESSION['start_money'] = 500;
        session_destroy();
    } else if (isset($_POST['Low'])) {
        $_SESSION['start_money'] -= $_POST['Low'];
        $_SESSION['type'] = 'low';
        $_SESSION['value'] = 'Low';
        if ($luck === 1) {
            $_SESSION['start_money'] += $_SESSION['rewards']['low'];
            $_SESSION['status'] = 'win';
        } else {
            $_SESSION['status'] = 'loss';
        }
    } else if (isset($_POST['Moderate'])) {
        $_SESSION['start_money'] -= $_POST['Moderate'];
        $_SESSION['type'] = 'moderate';
        $_SESSION['value'] = 'Moderate';
        if ($luck === 1) {
            $_SESSION['start_money'] += $_SESSION['rewards']['moderate'];
            $_SESSION['status'] = 'win';
        } else {
            $_SESSION['status'] = 'loss';
        }
    } else if (isset($_POST['High'])) {
        $_SESSION['start_money'] -= $_POST['High'];
        $_SESSION['type'] = 'high';
        $_SESSION['value'] = 'High';
        if ($luck === 1) {
            $_SESSION['start_money'] += $_SESSION['rewards']['high'];
            $_SESSION['status'] = 'win';
        } else {
            $_SESSION['status'] = 'loss';
        }

    } else if (isset($_POST['Severe'])) {
        $_SESSION['start_money'] -= $_POST['Severe'];
        $_SESSION['type'] = 'severe';
        $_SESSION['value'] = 'Severe';
        if ($luck === 1) {
            $_SESSION['start_money'] += $_SESSION['rewards']['severe'];
            $_SESSION['status'] = 'win';
        } else {
            $_SESSION['status'] = 'loss';
        }
    }
    $message = "<p class=".$_SESSION['status'].">".strtoupper(date('m/d/Y h:ia'))." You pushed ".$_SESSION['value']." Risk. Value is ".$_SESSION['risks'][$_SESSION['type']]." Your current money is now ".$_SESSION['start_money']."</p>";
    $_SESSION['message'][] = $message;


    header('Location: ./index.php');
    var_dump($_POST);   
    var_dump($_SESSION);
?>