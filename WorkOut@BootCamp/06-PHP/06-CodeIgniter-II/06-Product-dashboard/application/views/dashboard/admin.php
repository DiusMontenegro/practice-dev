<?php
defined('BASEPATH') OR exit('No direct script access allowed');
$this->load->view('partials/header'); ?>
    <main class="container">
        <div class="action container ">
            <div class="actions inline-block">
                <h1>Manage Products</h1>
            </div>
            <div class="actions inline-block ">
                <a href=<?= base_url('products/new') ?>>Add new</a>
            </div>
        </div>
        <table class="container">
<?php   if(isset($flash_message)) {?>
            <div class="message">
                <?= $flash_message ?>
            </div>
<?php   }?>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Inventory Count</th>
                    <th>Quantity Sold</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
<?php       foreach($products as $product) {?>
                <tr>
                    <td><?= $product['id'] ?></td>
                    <td><a href=<?= base_url('products/show/'.$product['id']) ?>><?= $product['name'] ?></a></td>
                    <td><?= $product['inventory'] ?></td>
                    <td><?= $product['sold'] ?></td>
                    <td><a href=<?= base_url('products/edit/'.$product['id']) ?>>Edit</a><a href=<?= base_url('products/remove/'.$product['id']) ?>>Remove</a></td>
                </tr>
<?php       }?>
            </tbody>
        </table>
    </main>
<?php $this->load->view('partials/footer'); ?>
