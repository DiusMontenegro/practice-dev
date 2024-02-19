<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
    $this->load->view('partials/header');
    $csrf = array(
        'name' => $this->security->get_csrf_token_name(),
        'hash' => $this->security->get_csrf_hash()
    );
?>
    <main class="container">
        <h2>Are you sure you want to delete "<?= $product['name'] ?>"?</h2>
        <div class="product">
            <h3>Product id: <span># <?= $product['id'] ?></span></h3>
            <h3>Product name: <span><?= $product['name'] ?></span></h3>
            <h3 id="description">Description: <span><?= $product['description'] ?></span></h3>
        </div>
        <form action=<?= base_url('products/remove/'.$product['id']) ?> method="POST">
        <input type="hidden" name="<?=$csrf['name'];?>" value="<?=$csrf['hash'];?>" />
            <a id="no" href=<?= base_url('dashboard') ?>>No</a>
            <input type="submit" name="delete" value="Yes, I want to delete">
        </form>
    </main>
<?php $this->load->view('partials/footer'); ?>
