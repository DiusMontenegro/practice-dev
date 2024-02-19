<?php
/**
 * File: Product.php
 * Date: 02/19/2024
 * Programmer: Dius Montenegro
 * Description: This file defines the Product model, handling database interactions related to products.
 */

defined('BASEPATH') OR exit('No direct script access allowed');

class Product extends CI_Model
{
    /**
     * Constructor method to set the default timezone and load the database.
     */
    public function __construct()
    {
        date_default_timezone_set('Asia/Manila');
        $this->load->database();
    }

    /**
     * Retrieve all products from the database.
     *
     * @return array - Array containing all products.
     */
    public function get_all_products()
    {
       return $this->db->query("SELECT * FROM products")->result_array();
    }

    /**
     * Retrieve a product by its ID from the database.
     *
     * @param int $id - The ID of the product.
     * @return array - Array containing product information.
     */
    public function get_product_by_id($id)
    {
       return $this->db->query(
            "SELECT id, admin_id, name, description, price, inventory, sold, DATE_FORMAT(created_at, '%M %e, %Y') AS created_at
            FROM products
            WHERE id = ?", array($id)
        )->row_array();
    }

    /**
     * Delete a product from the database by its ID.
     *
     * @param int $id - The ID of the product to be deleted.
     */
    public function delete_product($id)
    {
        $this->db->query("DELETE FROM products WHERE id = ?", array($id));
    }

    /**
     * Validate form input for adding or editing a product.
     *
     * @return array - Array containing form validation rules and messages.
     */
    public function validate()
    {
        $validation = array(
            $this->form_validation->set_error_delimiters('<p class="errors">❌ ', '</p>'),
            $this->form_validation->set_rules('name','Product Name','required'),
            $this->form_validation->set_rules('description','Description','required|min_length[2]'),
            $this->form_validation->set_rules('price','Price','required|numeric|greater_than_equal_to[1]'),
            $this->form_validation->set_rules( 'inventory', 'Inventory', 'required|greater_than_equal_to[1]'),
        );
        return $validation;
    }

    /**
     * Add a new product to the database.
     *
     * @param int $id - The ID of the admin adding the product.
     */
    public function add_product($id)
    {
        $sold = 70;
        $sql = "INSERT INTO products(admin_id, name, description, price, inventory, sold, created_at, updated_at)
        VALUES (?,?,?,?,?,?,NOW(),NOW())";

        $values = array(
            $this->security->xss_clean($id),
            $this->security->xss_clean($this->input->post('name')),
            $this->security->xss_clean($this->input->post('description')),
            $this->security->xss_clean($this->input->post('price')),
            $this->security->xss_clean($this->input->post('inventory')),
            $this->security->xss_clean($sold),
        );

        $this->db->query($sql, $values);
    }

    /**
     * Validate and add a new product, returning success or error messages.
     *
     * @param int $id - The ID of the admin adding the product.
     * @return string - Success or error message.
     */
    public function validate_products($id)
    {
        $this->validate();

        if ($this->form_validation->run()) {
            $this->add_product($id);
            return "<p class='success'> ✅ A new product has been added.</p>";
        }

        return validation_errors();
    }

    /**
     * Edit a product in the database by its ID.
     *
     * @param int $id - The ID of the product to be edited.
     */
    public function edit_product_by_id($id)
    {
        $sql = "UPDATE products
                SET admin_id = ?,
                    name = ?,
                    description = ?,
                    price = ?,
                    inventory = ?,
                    updated_at = NOW()
                WHERE id = ?";;

        $values = array(
            $this->security->xss_clean($this->session->userdata("is_admin")),
            $this->security->xss_clean($this->input->post('name')),
            $this->security->xss_clean($this->input->post('description')),
            $this->security->xss_clean($this->input->post('price')),
            $this->security->xss_clean($this->input->post('inventory')),
            $this->security->xss_clean($id)
        );

        $this->db->query($sql, $values);
    }

    /**
     * Validate and edit a product, returning success or error messages.
     *
     * @param int $id - The ID of the product to be edited.
     * @return string - Success or error message.
     */
    public function edit_product($id)
    {
        $this->validate();

        if ($this->form_validation->run()) {
            $this->edit_product_by_id($id);
            return "<p class='success'> ✅ Product was successfully edited.</p>";
        }

        return validation_errors();
    }
}
