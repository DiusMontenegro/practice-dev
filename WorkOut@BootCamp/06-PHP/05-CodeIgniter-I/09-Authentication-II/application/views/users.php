<?php
defined('BASEPATH') OR exit('No direct script access allowed');
$this->load->view('partials/header'); ?>
    <div class="messages container">
        <?= validation_errors() ?>
<?php   if (isset($status) AND isset($message)) {?>
        <h6 class=<?= $status ?>><?= $message ?></h6>
<?php   }?>
    </div>
    <div class="forms container">
        <form id="sign-up" action=<?= base_url('users/add') ?> method="POST">
            <h1>Sign Up</h1>
            <div class="labels">
                <label for="first_name">First Name:</label>
                <label for="last_name">Last Name:</label>
                <label for="email">Email:</label>
                <label for="contact_number">Contact Number:</label>
                <label for="password">Password:</label>
                <label for="confirm_password">Confirm Password:</label>
            </div>
            <div class="inputs">
                <input name="first_name" id="first_name" type="text" placeholder="Enter your first name">
                <input name="last_name" id="last_name" type="text" placeholder="Enter your last name">
                <input name="email" id="email" type="text" placeholder="Enter your email">
                <input name="contact_number" id="contact_number" type="text" placeholder="Enter your contact number">
                <input name="password" id="password" type="password" placeholder="Enter your password">
                <input name="confirm_password" id="confirm_password" type="password" placeholder="Confirm your password">
            </div>
            <input id="register-btn" type="submit" value="Register">
        </form>
        <form id="login" action=<?= base_url("users/login") ?> method="POST">
            <h1>Log In</h1>
            <div class="labels">
                <label for="login_email">Email or Phone:</label>
                <label for="login_password">Password:</label>
            </div>
            <div class="inputs">
                <input name="email_or_phone" id="login_email" type="text" placeholder="Email or Phone number">
                <input name="login_password" id="login_password" type="password" placeholder="Enter your password">
            </div>
            <input id="login-btn" type="submit" value="Log In">
        </form>
    </div>
<?php $this->load->view('partials/footer'); ?>
