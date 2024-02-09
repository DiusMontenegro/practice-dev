<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Order extends CI_Model
{
    public function __construct() {
        date_default_timezone_set('Asia/Manila');
        $this->load->database();
    }

    // CREATE DATA TO CART
    public function add_to_cart($data)
    {
        $query =
        "INSERT INTO cart(product_id, name, quantity, price, created_at, updated_at)
        VALUES (?,?,?,?,?,?)";
        $values = array( $data['id'], $data['name'], $data['quantity'], $data['price'], date('F j, Y g:i A'), date('F j, Y g:i A'));
        $this->db->query($query, $values);
    }

    // READ ALL DATA FROM PRODUCTS
    function get_products()
    {
        return $this->db->query("SELECT * FROM products")->result_array();
    }

    // READ ONE PRODUCT BY ID
    public function get_product_by_id($data)
    {
        return $this->db->query("SELECT * FROM products WHERE id = ?", array($data))->row_array();
    }

    // READ ALL DATA FROM CART
    function get_cart()
    {
        $query = "SELECT product_id, name, SUM(quantity) as quantity, SUM(price) as price
        FROM cart
        GROUP BY product_id ;";
        return $this->db->query($query)->result_array();
    }

    // READ ONE DATA FROM CART
    public function get_item_cart($data)
    {
        return $this->db->query(
            "SELECT product_id, name, SUM(quantity) as quantity, SUM(price) as price
            FROM cart
            WHERE product_id = ?
            GROUP BY product_id", array($data))->row_array();
    }

    // TOTAL PRICE FROM CART
    public function get_total()
    {
        $query = "SELECT SUM(price) as price FROM cart;";
        return $this->db->query($query)->row_array();
    }

    // COUNT Products
    public function get_item_count()
    {
        $query = "SELECT COUNT(DISTINCT name) AS items
        FROM cart;";
        return $this->db->query($query)->row_array();
    }

    // DELETE record from cart.
    public function delete($id){
        $query = "DELETE FROM cart WHERE product_id = $id";
        return $this->db->query($query);
    }
}
