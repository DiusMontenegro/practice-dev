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

class Order extends CI_Model
{
    /**
     * Constructor function for the Order model.
     * Sets the default timezone to Asia/Manila and loads the CodeIgniter database library.
     */
    public function __construct()
    {
        date_default_timezone_set('Asia/Manila');
        $this->load->database();
    }

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
     * If validation passes, create a new order and return a success message.
     * If validation fails, return the validation error messages.
     *
     * @param array $order An associative array containing the order data.
     * @return string A success message or validation error messages.
     */
    public function validate_order($order)
    {
        // Set error delimiters and form validation rules for the 'customer_order' field
        $this->form_validation->set_error_delimiters("<p class='errors'>❌ ","</p>");
        $this->form_validation->set_rules('customer_order','Customer Order','required|min_length[2]');

        // Check if form validation is successful
        if ($this->form_validation->run()) {
            // If validation passes, create a new order and return success message
            $this->create_order($order);
            return "<p class='success'>✅ Order was added successfully</p>";
        }

        // If validation fails, return validation error messages
        return validation_errors();
    }
}
