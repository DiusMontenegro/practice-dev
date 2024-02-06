<?php
defined('BASEPATH') OR exit('No direct script access allowed');
$this->load->view('partials/header'); ?>
    <form id="delete-form" class="container" action=<?= base_url('bookmarks/destroy/'.$record['id'])?> method="POST">
        <h3>Are you sure you want to delete?</h3>
        <p><?= $record['folder'] ?>/<?= $record['name'] ?> (<a href=<?= $record['url'] ?>><?= $record['url'] ?></a>)</p>
        <a id="no" href=<?= base_url() ?>>No</a>
        <input type="hidden" name="delete" value=<?= $record['id'] ?>>
        <input id="delete" type="submit" name="confirm" value="Yes, I want to delete">
    </form>
<?php $this->load->view('partials/footer'); ?>
