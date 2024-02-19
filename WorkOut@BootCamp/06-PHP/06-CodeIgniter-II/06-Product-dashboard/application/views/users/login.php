<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
    $this->load->view('partials/header');
    $csrf = array(
        'name' => $this->security->get_csrf_token_name(),
        'hash' => $this->security->get_csrf_hash()
    );
?>
    <main class="container">
        <form action=<?= base_url('users/validate_login') ?> method="POST" >
        <input type="hidden" name="<?=$csrf['name'];?>" value="<?=$csrf['hash'];?>" />
            <h1 class="text-start">Login</h1>
            <label class="text-start">Email address:
                <input name="email" type="text">
            </label>
            <label class="text-start">Password:
                <input name="password" type="password">
            </label>
            <input id="login" name="login" type="submit" value="Login">
            <a id="register" href=<?= base_url('register') ?>>Dont have an account? Register</a>
        </form>
        <?php   if(isset($flash_message)) {?>
        <div class="message">
            <?= $flash_message ?>
        </div>
<?php   }?>
    </main>
<?php $this->load->view('partials/footer'); ?>
