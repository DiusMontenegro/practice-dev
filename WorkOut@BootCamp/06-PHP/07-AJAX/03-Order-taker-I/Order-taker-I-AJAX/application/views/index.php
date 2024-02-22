<?php
    defined('BASEPATH') OR exit('No direct script access allowed');
    $this->load->view('partials/header');
?>
        <main class="container">
            <h1>Order Queue:</h1>
            <div id="orders"></div>
        </main>
        <form class="container">
            <input id="order" name="customer_order" type="text" required>
            <input id="submit-btn" name="submit_order" type="submit" value="Order">
        </form>
<?php $this->load->view('partials/footer'); ?>
