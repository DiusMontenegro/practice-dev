<?php
defined('BASEPATH') OR exit('No direct script access allowed');
$this->load->view('partials/header'); ?>
    <div class="container">
        <h1>Order Queue:</h1>
        <div class="cards_container">
<?php   foreach ($orders AS $order) {?>
            <div class="card">
                <form action=<?= base_url('orders/delete_order/'.$order['id']) ?> method="POST">
                    <input class="delete" type="submit" value="X">
                </form>
                <h2><?= $order['id'] ?></h2>
                <form action=<?= base_url("orders/update_order/{$order['id']}") ?> class="description" method="POST">
                    <p><?= $order['customer_order'] ?></p>
                </form>
            </div>
<?php   }?>
        </div>
        <form class="submit_order" action=<?= base_url('orders/create_order') ?> method="POST">
            <input name="order" class="order_input" type="text">
            <input class="order" type="submit" value="Order">
        </form>
    </div>
<?php $this->load->view('partials/footer'); ?>
