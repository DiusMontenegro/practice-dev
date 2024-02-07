<?php
defined('BASEPATH') OR exit('No direct script access allowed');
$this->load->view('partials/header'); ?>
    <div class="container">
        <a href=<?= base_url() ?>>Go Back</a> | <a href=<?= base_url('contacts/edit/'.$record['id'])?>>Edit</a>
        <h1 id="h1-new">Contact #<?= $record['id'] ?></h1>
        <h3>Name: <?= $record['name'] ?></h3>
        <h3>Contact Number: <?= $record['contact_number'] ?></h3>
    </div>
<?php $this->load->view('partials/footer'); ?>
