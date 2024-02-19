<?php
defined('BASEPATH') OR exit('No direct script access allowed');
$this->load->view('partials/header');
    $csrf = array(
        'name' => $this->security->get_csrf_token_name(),
        'hash' => $this->security->get_csrf_hash()
    );
?>
    <main class="container">
        <form id="register_form" action=<?= base_url('users/validate_registration')?> method="POST">
        <input type="hidden" name="<?=$csrf['name'];?>" value="<?=$csrf['hash'];?>" />
            <h1 class="text-start">Register</h1>
            <label class="text-start">Email address:
                <input name="email" type="text">
            </label>
            <label class="text-start">First name:
                <input name="first_name" type="text">
            </label>
            <label class="text-start">Last Name:
                <input name="last_name" type="text">
            </label>
            <label class="text-start">Password:
                <input name="password" type="password">
            </label>
            <label class="text-start">Confirm Password:
                <input name="confirm_password" type="password">
            </label>
            <input id="login" name="register" type="submit" value="Register">
            <a id="register" href=<?= base_url($link_path) ?>>Already have an account? Login</a>
        </form>
        <?php   if(isset($flash_message)) {?>
        <div class="message">
            <?= $flash_message ?>
        </div>
<?php   }?>
    </main>
<?php $this->load->view('partials/footer'); ?>
