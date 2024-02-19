<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
    $this->load->view('partials/header');
    $csrf = array(
        'name' => $this->security->get_csrf_token_name(),
        'hash' => $this->security->get_csrf_hash()
    );
?>
    <main class="container">
        <div class="action container ">
            <div class="actions inline-block">
                <h1>Edit Product # <?= $product['id'] ?></h1>
            </div>
            <div class="actions inline-block ">
                <a href=<?= base_url('dashboard/admin')?>>Return to Dashboard</a>
            </div>
        </div>
        <form action=<?= base_url('products/edit_product/'.$product['id'])?> method="POST">
        <input type="hidden" name="<?=$csrf['name'];?>" value="<?=$csrf['hash'];?>" />
            <label>Name:
                <input name="name" type="text">
            </label>
            <label>Description:
                <textarea name="description" id="description"></textarea>
            </label>
            <label>Price:
                <input name="price" type="text">
            </label>
            <label>Inventory Count:
                <input name="inventory" id="count" type="number" value="1">
            </label>
            <input id="submit" name="edit" type="submit" value="Save">
        </form>
<?php   if(isset($flash_message)) {?>
        <div class="message">
            <?= $flash_message ?>
        </div>
<?php   }?>
    </main>
<?php $this->load->view('partials/footer'); ?>
