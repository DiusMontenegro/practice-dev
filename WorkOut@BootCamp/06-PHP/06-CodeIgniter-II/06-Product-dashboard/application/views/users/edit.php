<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
    $this->load->view('partials/header');
    $csrf = array(
        'name' => $this->security->get_csrf_token_name(),
        'hash' => $this->security->get_csrf_hash()
    );
?>
    <main class="container">
<?php   if(isset($flash_message)) {?>
        <div class="message">
            <?= $flash_message ?>
        </div>
<?php   }?>
        <h1>Edit Profile</h1>
        <div class="form-container">
            <form id="information" action=<?= base_url("users/edit_user_info/{$user['id']}") ?> method="POST">
            <input type="hidden" name="<?=$csrf['name'];?>" value="<?=$csrf['hash'];?>" />
                <h2>Edit Information</h2>
                <label>Email address:
                    <input name="email" type="text" placeholder="Please enter your email address">
                </label>
                <label>First name:
                    <input name="first_name" type="text" placeholder="Please enter your first name">
                </label>
                <label>Last name:
                    <input name="last_name" type="text" placeholder="Please enter your last name">
                </label>
                <input name="edit_info" class="submit" type="submit" value="Edit">
            </form>
            <form action=<?= base_url("users/edit_user_info/{$user['id']}") ?> method="POST">
            <input type="hidden" name="<?=$csrf['name'];?>" value="<?=$csrf['hash'];?>" />
                <h2>Change Password</h2>
                <label>Current Password:
                    <input name="current_password" type="password" placeholder="Please enter your current password">
                </label>
                <label>New Password:
                    <input name="new_password" type="password" placeholder="Please enter your new password">
                </label>
                <label>Confirm Password:
                    <input name="confirm_password" type="password" placeholder="Confirm your new password">
                </label>
                <input name="edit_password" class="submit" type="submit" value="Save">
            </form>
        </div>
    </main>
<?php $this->load->view('partials/footer'); ?>
