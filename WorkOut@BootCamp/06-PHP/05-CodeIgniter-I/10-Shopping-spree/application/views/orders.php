<?php
defined('BASEPATH') OR exit('No direct script access allowed');
$this->load->view('partials/header');?>
    <main class="container">
<?php   foreach ($items as $item) {?>
        <div class="card">
            <img src=<?= $item['image'] ?> alt=<?= $item['name'] ?>>
            <h2><?= $item['name'] ?></h2>
            <span>$<?= $item['price'] ?></span>
            <form class="card-form" action=<?= base_url('orders/add_to_cart/'.$item['id']) ?> method="POST">
                <input name="quantity" type="number" value="1" min="0">
                <input class="buy" type="submit" value="Buy">
            </form>
        </div>
<?php   } ?>
    </main>
<?php $this->load->view('partials/footer'); ?>
