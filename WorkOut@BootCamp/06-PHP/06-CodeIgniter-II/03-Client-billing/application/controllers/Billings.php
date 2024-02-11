<?php
defined('BASEPATH') OR exit('No direct script access allowed');
date_default_timezone_set('Asia/Manila');
class Billings extends CI_Controller {

    public $billing, $input, $security, $form_validation;

    // Index method. Index method for the Billings controller.
    // * Retrieves all billing data and loads the client_billing view.
    public function index()
    {
        $data['results'] = $this->billing->get_all();
        $data['title'] = 'Client Billing';
        $this->load->view('client_billing', $data);
    }

    //Get results method for the Billings controller.
    // * Retrieves billing data based on user input (start_date and end_date).
    public function get_results() {

        // Sanitize user input (start_date and end_date)
        $data = array (
            'start_date' => $this->security->xss_clean($this->input->post('start_date')),
            'end_date' => $this->security->xss_clean($this->input->post('end_date')),
        );

        // Retrieve billing data based on user input
        $data['results'] = $this->billing->get_results($data);

        // Load the client_billing view with the filtered data
        $data['title'] = 'Client Billing';
        $this->load->view('client_billing', $data);
    }
}
