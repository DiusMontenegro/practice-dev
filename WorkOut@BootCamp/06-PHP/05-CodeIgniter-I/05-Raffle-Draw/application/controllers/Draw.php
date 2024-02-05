<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Draw extends CI_Controller
{
    public $session;

    public function index()
    {
        if (!$this->session->has_userdata('num_customers')) {
            $this->session->set_userdata('num_customers', 10);
            $this->session->set_userdata('pick', rand(1000000, 9999999));
        }

        $data = array (
            'num_customers' => $this->session->userdata('num_customers'),
            'ticket' => $this->session->userdata('pick'),
        );

        $this->load->view('main_view', $data);
    }

    public function pick()
    {
        $num_customers = $this->session->userdata('num_customers') - 1;
        $ticket = rand(1000000, 9999999);
        if ($num_customers === 0) {
            $ticket = "Game Over";
        } else if ($num_customers < 0) {
            $num_customers = 10;
            session_destroy();
        }
        $this->session->set_userdata('num_customers', $num_customers);
        $this->session->set_userdata('pick', $ticket);
        redirect('draw/index');
    }
}
