<?php
class Users extends CI_Controller
{
    public $session;
    public function index() {
        $this->load->view("partials/header");
        $this->load->view("users/index.php");
        $this->load->view("partials/footer");
    }

    public function new() {
        $this->load->view("partials/header");
        $this->load->view("users/new");
        $this->load->view("partials/footer");
    }

    public function create()
    {
        echo  "This feature is coming soon! <br>";
        echo  "Your input has been collected by our scam website 😂 <br>";
        var_dump($_POST);
    }

    public function count()
    {
        $count = $this->session->userdata("count");
        if (empty($count)) {
            $count = 0;
        }
        $count++;
        $this->session->set_userdata("count", $count);
        $this->load->view("partials/header");
        $this->load->view("users/count");
        $this->load->view("partials/footer");
    }

    public function reset() {
        session_destroy();
        redirect(base_url("users/count"));
    }

    public function say($anything, $number = 1)
    {
        $infos = array(
            "message"=> $anything,
            "number"=> $number,
        );
        $this->session->set_userdata($infos);
        $this->load->view("partials/header");
        $this->load->view('users/say');
        $this->load->view("partials/footer");
    }

    public function mprep()
    {
        $view_data['about'] = array(
            'name' => "Michael Choi",
            'age'  => 40,
            'location' => "Seattle, WA",
            'hobbies' => array( "Basketball", "Soccer", "Coding", "Teaching", "Kdramas")
        );
        $this->load->view("partials/header");
        $this->load->view('users/mprep', $view_data);
        $this->load->view("partials/footer");
    }
}
