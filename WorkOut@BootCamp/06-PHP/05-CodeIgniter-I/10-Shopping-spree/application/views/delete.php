<?php
defined('BASEPATH') OR exit('No direct script access allowed');
$this->load->view('partials/header');
?>
    <section class="delete_page container">
        <h1 id= "confirm_delete">Are you sure you want to delete this item from your cart?</h1>
        <h5><?= $product['name'] ?></h5>
        <h5>Amount: <?= $product['price'] ?> </h5>
        <h5>Quantity: <?= $product['quantity'] ?> pc/s</h5>
        <form action=<?= base_url('delete/'.$product['product_id']) ?> method="POST">
            <a id="cancel_delete" href=<?= base_url('checkout') ?>>NO</a>
            <input id="delete-btn" type="submit" name="delete" value="Yes, I want to delete">
        </form>
    </section>
<?php $this->load->view('partials/footer'); ?>
