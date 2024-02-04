<?php
class Main extends CI_Controller
{
    public $session;
    public function index()
    {
        $this->load->view("partials/header");
        $this->load->view("main/main");
        $this->load->view("partials/footer");
    }

    public function world()
    {
        $this->load->view("partials/header");
        $this->load->view("main/world");
        $this->load->view("partials/footer");
    }

    public function ninjas($num = 5) {
        $number = (int)$num;
        $this->session->set_userdata("num", $number);
        $this->load->view("partials/header");
        $this->load->view("main/ninjas");
        $this->load->view("partials/footer");
    }

    public function users () {
        $this->load->view("partials/header");
        $this->load->view("");
        $this->load->view("partials/footer");
    }
}
