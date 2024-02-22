<?php
/**
 * Order Model
 *
 * This CodeIgniter model, named Order, provides functionality for managing orders in a database.
 *
 * Programmer: Dius Montenegro
 * Date: 02/22/2024
 */

// Ensuring no direct script access is allowed
defined('BASEPATH') OR exit('No direct script access allowed');

// Setting the default timezone to Asia/Manila
date_default_timezone_set('Asia/Manila');

class Order extends CI_Model
{
    /**
     * Retrieve all orders from the 'orders' table.
     *
     * @return array An array of orders retrieved from the database.
     */
    public function get_orders() {
        return $this->db->query("SELECT * FROM orders")->result_array();
    }

    /**
     * Create a new order in the 'orders' table with the provided data.
     *
     * @param array $order An associative array containing the order data.
     */
    public function create_order($order)
    {
        $sql = "INSERT INTO orders(customer_order, created_at, updated_at)
                VALUES (?, NOW(), NOW())";

        // Extracting the 'customer_order' value from the provided data
        $values = $this->input->post("customer_order");

        // Executing the SQL query to insert the new order into the database
        $this->db->query($sql, $values);
    }

    /**
     * Validate the order data using CodeIgniter form validation rules.
     * If validation passes, create a new order.
     *
     * @param array $order An associative array containing the order data.
     */
    public function validate_order($order)
    {
        // Setting form validation rules for the 'customer_order' field
        $this->form_validation->set_rules('customer_order','Customer Order','required');

        // Checking if form validation is successful
        if ($this->form_validation->run()) {
            // If validation passes, create a new order
            $this->create_order($order);
        }
    }
}
