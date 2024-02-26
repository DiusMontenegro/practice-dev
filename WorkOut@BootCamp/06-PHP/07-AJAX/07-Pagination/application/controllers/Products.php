<?php
defined('BASEPATH') OR exit('No direct script access allowed');
date_default_timezone_set('Asia/Manila');
/**
 * Programmer : Dius Montenegro
 * DATE : 02/24/2024
 *
 * DOCU: Products Controller responsible for handling and passing data that have been fetched from the Product Model
*/

class Products extends CI_Controller {

    public $product, $input, $get;

    // method for initializing the default view
    public function index()
    {
        $data['title'] = 'Pagination';
        $this->load->view('index', $data);
    }

    // method for passing the filtered data and output it as a json ecoded data.
    public function search_filter()
    {
        $data['products'] = $this->product->search_filter();
        echo json_encode($data);
    }

}
