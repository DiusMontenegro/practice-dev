<?php
defined('BASEPATH') OR exit('No direct script access allowed');
$this->load->view('partials/header'); ?>
    <div class="container">
        <h1>Order Queue:</h1>
        <div class="cards_container"></div>
        <form class="create_order" action=<?= base_url('orders/create_order') ?> method="POST">
            <input name="order" class="order_input" type="text">
            <input class="order" type="submit" value="Order">
        </form>
    </div>
<?php $this->load->view('partials/footer'); ?>
