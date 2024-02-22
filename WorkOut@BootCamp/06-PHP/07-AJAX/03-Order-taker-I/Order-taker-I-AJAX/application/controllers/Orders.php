<?php
/**
 * Orders Controller
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
     * Display the HTML representation of orders.
     */
    public function index_html() {
        // Retrieve orders from the Order model and pass them to the view
        $data['orders'] = $this->order->get_orders();
        $this->load->view('partials/orders', $data);
    }

    /**
     * Create a new order based on the submitted form data.
     */
    public function create_order() {
        // Validate the submitted order data using the Order model
        $this->order->validate_order($this->input->post('customer_order'));

        // Retrieve updated orders after validation and pass them to the view
        $data['orders'] = $this->order->get_orders();
        $this->load->view('partials/orders', $data);
    }

    /**
     * Display the main index page with the title 'Order Taker'.
     */
    public function index()
    {
        // Set the title for the index page
        $data['title'] = 'Order Taker';
        $this->load->view('index', $data);
    }
}
