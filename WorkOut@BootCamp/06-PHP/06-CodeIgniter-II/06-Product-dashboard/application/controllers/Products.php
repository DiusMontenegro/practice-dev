<?php
/**
 * File: Products.php
 * Date: 02/19/2024
 * Programmer: Dius Montenegro
 * Description: This file defines the Products controller, handling product-related operations in the admin panel.
 */

defined('BASEPATH') OR exit('No direct script access allowed');
date_default_timezone_set('Asia/Manila');

class Products extends CI_Controller {

    public $session, $product, $review, $reply, $input;

    /**
     * Display the form for adding a new product in the admin panel.
     */
    public function new()
    {
        $data['flash_message'] = $this->session->flashdata('message');
        $data['title'] = 'New Product - Admin';
        $data['link'] = 'Log off';
        $data['link_path'] = 'users/log_off';
        $data['style'] = 'products.css';
        $data['user'] = $this->session->userdata('user');
        $data['nav_links'] = array (
            array ('name' => 'Dashboard', 'link' => 'dashboard'),
            array ('name' => 'Profile', 'link' => "profile/{$data['user']}"),
        );

        $logged_in = $this->session->userdata('is_login');
        $is_admin = $this->session->userdata('is_admin');

        if ($logged_in == FALSE) {
            $this->session->sess_destroy();
            redirect('/');
        } else if ($logged_in == TRUE && $is_admin == FALSE) {
            redirect('dashboard');
        }

        $this->load->view('products/new', $data);
    }

    /**
     * Add a new product based on the form submission.
     */
    public function add($id) {
        if ($this->input->post('add')) {
            $validate = $this->product->validate_products($id);
            if ($validate == TRUE) {
                $this->session->set_flashdata('message', $validate);
            }
            $this->session->set_flashdata('message', $validate);
        }
        redirect('new');
    }

    /**
     * Display the form for editing a product in the admin panel.
     */
    public function edit($id)
    {
        $data['flash_message'] = $this->session->flashdata('message');
        $data['title'] = 'Edit Product - Admin';
        $data['link'] = 'Log off';
        $data['link_path'] = 'users/log_off';
        $data['style'] = 'products.css';
        $data['user'] = $this->session->userdata('user');
        $data['product'] = $this->product->get_product_by_id($id);
        $data['nav_links'] = array (
            array ('name' => 'Dashboard', 'link' => 'dashboard'),
            array ('name' => 'Profile', 'link' => "profile/{$data['user']}"),
        );

        $logged_in = $this->session->userdata('is_login');
        $is_admin = $this->session->userdata('is_admin');

        if ($logged_in == FALSE) {
            $this->session->sess_destroy();
            redirect('/');
        } else if ($logged_in == TRUE && $is_admin == FALSE) {
            redirect('dashboard');
        }

        $this->load->view('products/edit', $data);
    }

    /**
     * Edit a product based on the form submission.
     */
    public function edit_product($id) {
        if ($this->input->post('edit')) {
            $validate = $this->product->edit_product($id);
            if ($validate == TRUE) {
                $this->session->set_flashdata('message', $validate);
            }
            $this->session->set_flashdata('message', $validate);
        }
        redirect('products/edit/'.$id);
    }

    /**
     * Display product information, including reviews and replies.
     */
    public function show($product_id)
    {
        $data['title'] = 'Product Information';
        $data['link'] = 'Log off';
        $data['link_path'] = 'users/log_off';
        $data['style'] = 'show.css';
        $data['user'] = $this->session->userdata('user');
        $data['flash_message'] = $this->session->flashdata('message');
        $data['product'] = $this->product->get_product_by_id($product_id);
        $data['reviews'] = $this->review->get_review_by_id($product_id);
        $data['replies'] = $this->reply->get_replies();
        $data['nav_links'] = array (
            array ('name' => 'Dashboard', 'link' => 'dashboard'),
            array ('name' => 'Profile', 'link' => "profile/{$data['user']}"),
        );

        $logged_in = $this->session->userdata('is_login');
        if ($logged_in == FALSE) {
            $this->session->sess_destroy();
            redirect('/');
        }

        $this->load->view('products/show', $data);
    }

    /**
     * Remove a product after confirmation in the admin panel.
     */
    public function remove($id)
    {
        $data['title'] = 'Confirm Remove';
        $data['link'] = 'Log off';
        $data['link_path'] = 'users/log_off';
        $data['style'] = 'remove.css';
        $data['user'] = $this->session->userdata('user');
        $data['product'] = $this->product->get_product_by_id($id);
        $data['nav_links'] = array (
            array ('name' => 'Dashboard', 'link' => 'dashboard'),
            array ('name' => 'Profile', 'link' => "profile/{$data['user']}"),
        );
        if ($this->input->post('delete')) {
            $this->product->delete_product($id);
            $this->session->set_flashdata('message','✅ Product was successfully removed.');
            redirect('dashboard/admin');
        }
        $this->load->view('products/remove', $data);
    }
}
