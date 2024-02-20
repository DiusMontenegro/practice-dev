<?php
defined('BASEPATH') OR exit('No direct script access allowed');
$csrf = array(
    'name' => $this->security->get_csrf_token_name(),
    'hash' => $this->security->get_csrf_hash()
);
$this->load->view('partials/header'); ?>
    <div id="kittens" class="container">
    </div>
<?php $this->load->view('partials/footer'); ?>
