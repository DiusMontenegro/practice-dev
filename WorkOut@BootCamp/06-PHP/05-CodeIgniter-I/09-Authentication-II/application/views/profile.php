<?php
defined('BASEPATH') OR exit('No direct script access allowed');
$this->load->view('partials/header'); ?>
    <div class="profile container">
        <a href=<?= base_url() ?>>Log out</a>
        <div id="user-profile">
            <h2>Basic Information</h2>
            <div class="info">
                <h4>First name:</h4>
                <h4>Last name:</h4>
                <h4>Contact number:</h4>
                <h4>Last failed login:</h4>
            </div>
            <div class="details">
                <h4><?= $record['first_name'] ?></h4>
                <h4><?= $record['last_name'] ?></h4>
                <h4><?= $record['contact_number'] ?></h4>
                <h4><?= $this->session->userdata('failed_attempt') ?></h4>
            </div>
        </div>
    </div>
<?php $this->load->view('partials/footer'); ?>
