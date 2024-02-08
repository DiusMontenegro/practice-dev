<?php
defined('BASEPATH') OR exit('No direct script access allowed');
date_default_timezone_set('Asia/Manila');
class Users extends CI_Controller {

    public $form_validation, $input, $session, $user;

    public function index()
    {
        $data['title'] = 'Authentication';
        $this->load->view('users', $data);
    }

    public function profile($id)
    {

        $data['title'] = 'Profile';
        $this->load->view('profile', $data);
    }

    public function add()
    {
        $this->form_validation->set_error_delimiters("<h6 class='error'>", "</h6>");
        $this->form_validation->set_rules("first_name", "First Name", "required");
        $this->form_validation->set_rules("last_name", "Last Name", "required");
        $this->form_validation->set_rules("email", "Email", "required|valid_email");
        $this->form_validation->set_rules("contact_number", "Contact Number", "required|numeric|is_unique[users.contact_number]",
            array(
                'is_unique' => 'The %s already exists.'
            )
        );
        $this->form_validation->set_rules("password", "Password", "required|min_length[8]");
        $this->form_validation->set_rules("confirm_password", "Confirm Password", "required|matches[password]");

        if ($this->form_validation->run() === FALSE) {
            $data['status'] = "error";
        } else {
            $data = array(
                'first_name' => $this->input->post('first_name'),
                'last_name' => $this->input->post('last_name'),
                'email' => $this->input->post('email'),
                'contact_number' => $this->input->post('contact_number'),
                'password' => $this->input->post('password'),
            );
            $inserted_data = $this->user->add_user($data);
            if ($inserted_data) {
                $data['status'] = "success";
                $data["message"] = "User was successfully added";
            }
        }
        $data['title'] = 'Authentication';
        $this->load->view('users', $data);
    }

    public function login() {
        $this->form_validation->set_error_delimiters("<h6 class='error'>", "</h6>");
        $this->form_validation->set_rules("email_or_phone", "Email or Phone", "required");
        $this->form_validation->set_rules("login_password", "Password", "required|min_length[8]");

        if ($this->form_validation->run() === FALSE) {
            $this->session->set_userdata("failed_attempt", date('F j, Y g:i A'));
            $data['status'] = 'error';
            $data['message'] = 'Invalid Email/Phone number';
            $data['title'] = 'Authentication';
            $this->load->view('users', $data);
            return;
        }

        $email_or_phone = $this->input->post("email_or_phone");
        $password = $this->input->post("login_password");

        $db_record = $this->user->get_user_by_email($email_or_phone);

        if ($db_record) {
            $hashed_password = md5($password . '' . $db_record['salt']);
            if ($hashed_password === $db_record['password']) {
                $user_id = $db_record['id'];
                $data['record'] = $this->user->get_user_by_id($user_id);
                $data['title'] = 'Authentication';
                $this->load->view('profile', $data);
            }
        } else {
            $this->session->set_userdata("failed_attempt", date('F j, Y g:i A'));
            $data['status'] = 'error';
            $data['message'] = 'Invalid Email/Phone number';
            $data['title'] = 'Authentication';
            $this->load->view('users', $data);
        }
    }
}
