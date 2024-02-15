<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * DOCU: Class Requests
 * Controller for managing leave-requests-related actions.
 *
 * Owner Dius - 02/15/2024
 */
class Requests extends CI_Controller {

    public $request, $session, $input;

    /**
     * DOCU: Displays a list of requests and handles user input for filtering.
     *
     * Owner Dius - 02/15/2024
     */
    public function index()
    {
        $data['requests'] = $this->request->get_requests();
        $data['visibility'] = 'd-block';

        if ($this->input->post()) {
            $data['requests'] = $this->request->get_record();
            $data['request_count'] = $this->request->get_count();
            $data['visibility'] = 'd-none';
        }

        $this->load->view('requests/request', $data);
    }

    /**
     *  DOCU: Retrieves a subset of requests based on the provided ID and updates session data.
     * @param int $id The ID used for retrieving requests.
     *
     * Owner Dius - 02/15/2024
     */
    public function request($id)
    {
        $show_more = 5;
        $this->session->set_userdata('count', $show_more + $id);

        $data['visibility'] = 'd-block';
        $data['requests'] = $this->request->get_requests_by_id($id);

        $this->session->sess_destroy();
        $this->load->view('requests/request', $data);
    }
}

