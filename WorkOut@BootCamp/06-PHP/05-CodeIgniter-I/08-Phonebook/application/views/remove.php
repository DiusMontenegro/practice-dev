<?php
defined('BASEPATH') OR exit('No direct script access allowed');
$this->load->view('partials/header'); ?>
    <div class="confirm-remove container">
        <h5>Are you sure you want to remove your contact?</h5>
        <h4><?= $record['name'] ?> / <?= $record['contact_number'] ?></h4>
        <form id="remove-form" action=<?= base_url('contacts/remove/'.$record['id']) ?> method="POST">
            <a href=<?= base_url()?>>No</a>
            <input type="hidden" name="action" value="delete">
            <input type="submit" class="submit" name="delete" value="Yes, I want to delete">
        </form>
    </div>
<?php $this->load->view('partials/footer'); ?>
