<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
    $this->load->view('partials/header');
    $csrf = array(
        'name' => $this->security->get_csrf_token_name(),
        'hash' => $this->security->get_csrf_hash()
    );
?>
<?php   if ($flash_message) {?>
        <div class="message container">
            <?= $flash_message ?>
        </div>
<?php   } ?>
        <main class="container">
            <h1>Order Queue:</h1>
            <div id="orders">
<?php       foreach ($orders AS $order) { ?>
                <div class="card">
                    <h2><?= $order['id'] ?></h2>
                    <p class="order"><?= $order['customer_order'] ?></p>
                </div>
<?php       }?>
            </div>
        </main>
        <form class="container" action=<?= base_url('orders/create_order') ?> method="POST">
            <input type="hidden" name="<?=$csrf['name'];?>" value="<?=$csrf['hash'];?>" />
            <input id="order" name="customer_order" type="text">
            <input id="submit-btn" name="submit_order" type="submit" value="Order">
        </form>
<?php $this->load->view('partials/footer'); ?>
