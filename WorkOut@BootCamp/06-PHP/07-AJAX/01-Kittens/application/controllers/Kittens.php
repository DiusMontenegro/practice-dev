<?php
defined('BASEPATH') OR exit('No direct script access allowed');
date_default_timezone_set('Asia/Manila');
class Kittens extends CI_Controller {

    public function index()
    {
        $data['title'] = 'Kittens';
        $this->load->view('index', $data);
    }
}
