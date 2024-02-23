<?php
defined('BASEPATH') OR exit('No direct script access allowed');
date_default_timezone_set('Asia/Manila');

/**
 * Author: Dius Montenegro
 * Date: 02/23/2024
 *
 * Class Orders
 * Controller for managing orders in the Order Taker application.
 */

class Orders extends CI_Controller {

    public $order, $input;

    /**
     * Displays the list of orders on the index page.
     */
    public function index()
    {
        $data['orders'] = $this->order->get_orders();
        $data['title'] = 'Order taker V2';
        $this->load->view('index', $data);
    }

    /**
     * Creates a new order based on the data submitted through POST request.
     * Redirects to the index page after creating the order.
     */
    public function create_order()
    {
        $this->order->create_order($this->input->post('order'));
        redirect('/');
    }

    /**
     * Deletes the order with the specified ID.
     * Redirects to the index page after deleting the order.
     *
     * @param int $id The ID of the order to be deleted.
     */
    public function delete_order($id)
    {
        $this->order->delete_order($id);
        redirect('/');
    }

    /**
     * Updates the order with the specified ID.
     * Redirects to the index page after updating the order.
     *
     * @param int $id The ID of the order to be updated.
     */
    public function update_order($id)
    {
        $this->order->update_order($id);
        redirect('/');
    }

}
