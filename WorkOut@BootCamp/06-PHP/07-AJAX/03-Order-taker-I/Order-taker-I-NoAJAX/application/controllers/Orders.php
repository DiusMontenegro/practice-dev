<?php
/**
 * Orders Controller
 *
 * This CodeIgniter controller, named Orders, handles order-related operations and page rendering.
 *
 * Programmer: Dius Montenegro
 * Date: 02/22/2024
 */

// Ensuring no direct script access is allowed
defined('BASEPATH') OR exit('No direct script access allowed');

// Setting the default timezone to Asia/Manila
date_default_timezone_set('Asia/Manila');

class Orders extends CI_Controller {

    /**
     * @var object $input - CI_Input instance for handling input data
     * @var object $session - CI_Session instance for managing session data
     * @var object $order - Custom Order model for handling order-related operations
     */
    public $input, $session, $order;

    /**
     * Display the main index page with orders, flash messages, and a title.
     */
    public function index()
    {
        // Retrieve flash message from session, orders, and set the title
        $data['flash_message'] = $this->session->flashdata('message');
        $data['orders'] = $this->order->get_orders();
        $data['title'] = 'Order Taker';

        // Load the 'index' view with the provided data
        $this->load->view('index', $data);
    }

    /**
     * Handle the creation of a new order.
     */
    public function create_order() {

        // Check if the form is submitted
        if ($this->input->post('submit_order')) {

            // Validate the order and get the validation result
            $validate = $this->order->validate_order($this->input->post('customer_order'));

            // Set flash message based on the validation result
            $this->session->set_flashdata('message', $validate);

        }

        // Redirect back to the main index page
        redirect('/');
    }
}
