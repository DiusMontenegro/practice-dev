<?php
defined('BASEPATH') OR exit('No direct script access allowed');
date_default_timezone_set('Asia/Manila');

/**
 * Author: Dius Montenegro
 * Date: 02/23/2024
 *
 * Class Order
 * Model for managing orders in the Order Taker application.
 */
class Order extends CI_Model {

    /**
     * Retrieves all orders from the database.
     *
     * @return array List of orders.
     */
    public function get_orders()
    {
        return $this->db->query("SELECT * FROM orders")->result_array();
    }

    /**
     * Creates a new order based on the data submitted through POST request.
     *
     * @return string Returns "Yes" on successful order creation, "No" otherwise.
     */
    public function create_order()
    {
        $this->form_validation->set_rules("order","Order","required");

        if ($this->form_validation->run()) {
            $sql = "INSERT INTO orders(customer_order, created_at) VALUES (?, NOW())";
            $values = array (
                $this->security->xss_clean($this->input->post("order")),
            );

            $this->db->query($sql, $values);
            return "Yes";
        }
        return "No";
    }

    /**
     * Deletes the order with the specified ID from the database.
     *
     * @param int $id The ID of the order to be deleted.
     */
    public function delete_order($id)
    {
        $sql = "DELETE FROM orders WHERE id = ?";
        $values = $this->security->xss_clean($id);
        $this->db->query($sql, $values);
    }

    /**
     * Updates the order with the specified ID in the database.
     *
     * @param int $id The ID of the order to be updated.
     */
    public function update_order($id) {
        $sql = "UPDATE orders
                SET customer_order = ?,
                    updated_at = NOW()
                WHERE id = ?";

        $values = array (
            $this->security->xss_clean($this->input->post('description')),
            $this->security->xss_clean($id)
        );

        $this->db->query($sql, $values);
    }

}
