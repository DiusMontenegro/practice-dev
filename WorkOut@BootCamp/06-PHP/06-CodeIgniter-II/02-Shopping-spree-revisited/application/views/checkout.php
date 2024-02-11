<?php
defined('BASEPATH') OR exit('No direct script access allowed');
$this->load->view('partials/header');
    $src = "https://imgs.search.brave.com/ucsHTFuP4su7Nyo9p4-_nZTyz2CFSQkur_QjFd7Ftv8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy81/LzVmL1JlZF9YLnN2/Zw.svg";
    if (!$total_payment['price']) {
        $total_payment['price'] = 0;
    }
?>
    <section class="container">
        <div id="checkout">
            <h3>Check Out</h3>
            <h4>$<?= $total_payment['price'] ?></h4>
            <table>
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
<?php           foreach($cart AS $product) {?>
                    <tr>
                        <td><?= $product['name'] ?></td>
                        <td><?= $product['quantity'] ?></td>
                        <td><?= $product['price'] ?></td>
                        <td><a href=<?= base_url('delete/'.$product['product_id']) ?>><img class="delete" src=<?= $src ?> alt="delete"></a></td>
                    </tr>
<?php           }?>
                </tbody>
            </table>
        </div>
        <div id="billing">
            <?= validation_errors() ?>
            <h3>Billing Information</h3>
            <form id="billing-form" action=<?= base_url('orders/bill_handler')?> method="POST">
            <input type="hidden" name="<?=$csrf['name'];?>" value="<?=$csrf['hash'];?>" />
                <div class="labels">
                    <label for="full_name">Name:</label>
                    <label for="address">Address:</label>
                    <label for="card_number">Card Number:</label>
                </div>
                <div class="inputs">
                    <input name="name" id="full_name" type="text" placeholder="Enter your full name">
                    <input name="address" id="address" type="text" placeholder="Enter your address">
                    <input name="card_number" id="card_number" type="text" placeholder="Enter your card number">
                </div>
                <input id="pay" type="submit" value="Submit Order">
            </form>
        </div>
    </section>
<?php $this->load->view('partials/footer'); ?>
