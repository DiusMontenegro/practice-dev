<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
    $this->load->view('partials/header');
    $csrf = array(
        'name' => $this->security->get_csrf_token_name(),
        'hash' => $this->security->get_csrf_hash()
    );
?>
    <main class="container">
        <h1><?= $product['name'] ?> ($<?= $product['price'] ?>)</h1>
        <h4>Added since: <?= $product['created_at'] ?></h4>
        <h4>Product ID: #<?= $product['id'] ?></h4>
        <h4>Description: <?= $product['description'] ?></h4>
        <h4>Total sold: <?= $product['sold'] ?></h4>
        <h4>Number of available stocks: <?= $product['inventory'] ?></h4>
        <form id="review" action=<?= base_url('reviews/validate_posts/'.$product['id']) ?> method="POST">
        <input type="hidden" name="<?=$csrf['name'];?>" value="<?=$csrf['hash'];?>" />
            <h2>Leave a Review</h2>
<?php       if(isset($flash_message)) {?>
            <div class="message">
                <?= $flash_message ?>
            </div>
<?php       }?>
            <textarea name="review"></textarea>
            <input name="add_review" class="submit" type="submit" value="Post">
        </form>
<?php   if ($reviews) {
        foreach ($reviews AS $review) {
           if($product['id'] === $review['product_id']) {?>
        <div class="post">
            <div class="author">
                <h3><?= $review['user'] ?> wrote:</h3>
            </div>
            <div class="timeframe">
                <h3><?= $review['created_at'] ?></h3>
            </div>
            <div class="post_message">
                <p><?= $review['content'] ?></p>
            </div>
            <div class="replies">
<?php       foreach ($replies AS $reply) {
                if ($review['id'] === $reply['post_id']) {?>
                <div class="author">
                    <h5><?= $reply['user'] ?> wrote:</h5>
                </div>
                <div class="timeframe">
                    <h5><?= $reply['created_at'] ?></h5>
                </div>
                <div class="reply">
                    <p><?= $reply['reply'] ?></p>
                </div>
<?php           }}?>
                <form action=<?= base_url("replies/validate_replies/{$product['id']}/{$review['id']}") ?> method="POST">
                <input type="hidden" name="<?=$csrf['name'];?>" value="<?=$csrf['hash'];?>" />
                    <textarea name="reply"></textarea>
                    <input name="add_reply" class="submit" type="submit" value="Reply">
                </form>
            </div>
        </div>
<?php   }}}?>
    </main>
<?php $this->load->view('partials/footer'); ?>
