<?php
defined('BASEPATH') OR exit('No direct script access allowed');
$this->load->view('partials/header'); ?>
    <main class="container">
        <div class="action container ">
            <div class="actions inline-block">
                <h1>All Products</h1>
            </div>
        </div>
        <table class="container">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Inventory Count</th>
                    <th>Quantity Sold</th>
                </tr>
            </thead>
            <tbody>
<?php       foreach($products as $product) {?>
                <tr>
                    <td><?= $product['id'] ?></td>
                    <td><a href=<?= base_url('products/show/'.$product['id']) ?>><?= $product['name'] ?></a></td>
                    <td><?= $product['inventory'] ?></td>
                    <td><?= $product['sold'] ?></td>
                </tr>
<?php       }?>
            </tbody>
        </table>
    </main>
<?php $this->load->view('partials/footer'); ?>
