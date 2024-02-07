<?php
defined('BASEPATH') OR exit('No direct script access allowed');
$this->load->view('partials/header'); ?>
    <div class = "messages container">
        <?= validation_errors() ?>
<?php   if (isset($status)) {?>
        <h6 class=<?= $status ?>><?= $status ?></h6>
<?php   }?>
    </div>
    <div class="container">
        <a href=<?= base_url() ?>>Go Back</a>
        <h1 id="h1-new">Add New Contact</h1>
        <form action=<?= base_url('contacts/new') ?> method="POST">
            <label>Name:
                <input type="text" name="name" placeholder="Enter your name">
            </label>
            <label>Contact Number:
                <input type="text" name="contact_number" placeholder="Enter your contact number">
            </label>
            <input type="submit" class="submit" name="create" value="Create">
        </form>
    </div>
<?php $this->load->view('partials/footer'); ?>
