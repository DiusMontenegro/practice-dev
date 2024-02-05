<?php
defined('BASEPATH') OR exit('No direct script access allowed');
$this->load->view('partials/header');
?>
    <h1>There are <span><?= $num_customers ?></span> Lucky winners selected</h1>
    <p><?= $ticket ?></p>
    <form action="<?= base_url('draw/pick') ?>" method="POST">
        <input type="submit" name="pick" value="Pick More">
    </form>
<?php $this->load->view('partials/footer'); ?>
