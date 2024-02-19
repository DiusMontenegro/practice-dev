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
                <h1>Add a new Product</h1>
            </div>
            <div class="actions inline-block ">
                <a href=<?= base_url('dashboard/admin')?>>Return to Dashboard</a>
            </div>
        </div>
        <form action=<?= base_url('products/add/'.$user)?> method="POST">
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
                <input name="inventory" id="count" type="number" min="0" value="1">
            </label>
            <input name="add" id="submit" type="submit" value="Create">
        </form>
<?php   if(isset($flash_message)) {?>
        <div class="message">
            <?= $flash_message ?>
        </div>
<?php   }?>
    </main>
<?php $this->load->view('partials/footer'); ?>
