<?php
defined('BASEPATH') OR exit('No direct script access allowed');
date_default_timezone_set('Asia/Manila');
class Orders extends CI_Controller {

    public $order, $input, $form_validation;

    public function index()
    {
        session_destroy();
        $data['items'] = $this->order->get_products();
        $cart = 0;
        $cart = $this->order->get_item_count();
        $data ['default'] = array(
            'nav' => "Cart ({$cart['items']})",
            'title' => 'Catalog',
            'link' => base_url('orders/checkout'),
        );
        $this->load->view('orders', $data);
    }

    public function add_to_cart($id)
    {
        $item = $this->order->get_product_by_id($id);
        $total_price = $item['price'] * $this->input->post('quantity');
        $data = array(
            'id' => $item['id'],
            'name' => $item['name'],
            'quantity' => $this->input->post('quantity'),
            'price' => $total_price,
        );
        $this->order->add_to_cart($data);
        redirect(base_url());
    }

    public function checkout() {
        $data ['default'] = array(
            'nav' => "Catalog",
            'title' => 'Checkout',
            'link' => base_url(),
        );
        $data['cart'] = $this->order->get_cart();
        $data['total_payment'] = $this->order->get_total();
        $this->load->view('checkout', $data);
    }

    public function success() {
        $data ['default'] = array(
            'nav' => "Home",
            'title' => 'Success',
            'link' => base_url(),
        );
        $this->load->view('success', $data);
    }

    public function bill_handler()
    {
        $this->form_validation->set_error_delimiters("<h6 class='errors'>","</h6>");
        $this->form_validation->set_rules('name','Full Name','required');
        $this->form_validation->set_rules('address','Address','required');
        $this->form_validation->set_rules('card_number','Card Number','required|numeric');
        if ($this->form_validation->run() == FALSE) {
            $this->checkout();
        } else {
            session_destroy();
            redirect(base_url('orders/success'));
        }
    }

    public function confirm_delete($id)
    {
        $data['product'] = $this->order->get_item_cart($id);
        $data ['default'] = array(
            'nav' => "Catalog",
            'title' => 'Delete Item',
            'link' => base_url(),
        );
        if ($this->input->post('delete')) {
            $this->order->delete($id);
            redirect(base_url('checkout'));
        }
        $this->load->view('delete', $data);
    }
}
