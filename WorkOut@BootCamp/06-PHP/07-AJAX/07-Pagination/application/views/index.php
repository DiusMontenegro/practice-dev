<?php
defined('BASEPATH') OR exit('No direct script access allowed');
$this->load->view('partials/header'); ?>
    <main class="container">
        <form action='products/search_filter' method="GET">
            <input name="name" id="name_input" type="text" placeholder="Search by name">
            <input name="min" id="min" class="price_range" type="number" min="0" placeholder="$min"> -
            <input name="max" id="max" class="price_range" type="number" min="0" placeholder="$max">
            <select name="price_order" id="price_order">
                <option value="low_to_high" selected >Low to High Price</option>
                <option value="high_to_low" >High to Low Price</option>
            </select>
        </form>
        <table>
            <thead>
                <tr>
                    <th>Item name</th>
                    <th>Number of stock</th>
                    <th>Price</th>
                    <th>Date Added</th>
                </tr>
            </thead>
            <tbody id="data"></tbody>
        </table>
        <div id="pagination">
            <span id="pagination_details"></span>
            <div id="pagination_links"></div>
        </div>
    </main>
<?php $this->load->view('partials/footer'); ?>
