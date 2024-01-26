<?php
    session_start();
    if (isset($_SESSION['count']) && $_POST['name']) {
        $_SESSION['count']--;
        $_SESSION['discount_code'] = rand(1000000, 9999999);
        $_SESSION['discount_message'] = "50% Discount";
    }
    header('Location: ./discount.php');
    var_dump($_SESSION);
?>
