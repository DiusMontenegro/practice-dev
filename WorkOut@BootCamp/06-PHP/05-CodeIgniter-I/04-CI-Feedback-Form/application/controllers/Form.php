<?php
class Form extends CI_Controller
{
    public $input;
    public function index()
    {
        $this->header();
        $this->load->view("feedback-form");
        $this->footer();
    }

    public function entry()
    {
        if (isset($_POST)) {
            $data['feedback'] = array (
                'first_name'=> $this->input->post('first_name'),
                'course'=> $this->input->post('course'),
                'score'=> $this->input->post('score'),
                'feedback'=> $this->input->post('feedback'),
            );
        }
        $this->header();
        $this->load->view('submitted-entry', $data);
        $this->footer();
    }

    public function header()
    {
        return $this->load->view("partials/header");
    }
    public function footer()
    {
        return $this->load->view("partials/footer");
    }
}

