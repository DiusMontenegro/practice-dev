<?php
/**
 * File: Users.php
 * Date: 02/19/2024
 * Programmer: Dius Montenegro
 * Description: This file defines the Users controller, managing user-related operations in the application.
 */

defined('BASEPATH') OR exit('No direct script access allowed');
date_default_timezone_set('Asia/Manila');

class Users extends CI_Controller {

    public $input, $user, $session;

    /**
     * Display the login page.
     */
    public function index()
    {
        $data['flash_message'] = $this->session->flashdata('message');
        $data['title'] = 'Login Page';
        $data['link'] = 'Register';
        $data['link_path'] = 'register';
        $data['style'] = 'login.css';
        if ($this->session->userdata('is_login') === TRUE) {
            $data['user'] = $this->session->userdata('user');
            redirect('dashboard');
        }
        $this->load->view('users/login', $data);
    }

    /**
     * Validate user login and set session data.
     */
    public function validate_login()
    {
        $validate = $this->user->check_user();
        $email = $this->user->get_user_by_email($validate['email']);
        if ($email) {
            $this->session->set_userdata('user', $validate['id']);
            $this->session->set_userdata('is_login', TRUE);
        }
        $this->session->set_flashdata('message', $validate);
        redirect('/');
    }

    /**
     * Log off the user and destroy the session.
     */
    public function log_off() {
        $this->session->sess_destroy();
        var_dump($this->session->userdata());
        redirect('login');
    }

    /**
     * Display the registration page.
     */
    public function register()
    {
        $data['flash_message'] = $this->session->flashdata('message');
        $data['title'] = 'Register Page';
        $data['link'] = 'Login';
        $data['link_path'] = 'login';
        $data['style'] = 'login.css';
        $this->load->view('users/register', $data);
    }

    /**
     * Validate user registration.
     */
    public function validate_registration()
    {
        if ($this->input->post('register')) {
            $validate = $this->user->validate_user();
            if ($validate == TRUE) {
                $this->session->set_flashdata('message','Registration Successful');
            }
            $this->session->set_flashdata('message', $validate);
        }
        redirect('register');
    }

    /**
     * Display user profile page.
     *
     * @param int $id - The ID of the user.
     */
    public function profile($id)
    {
        $data['title'] = 'Profile';
        $data['link'] = 'Log off';
        $data['link_path'] = 'users/log_off';
        $data['style'] = 'profile.css';
        $data['user'] = $this->user->get_user_by_id($id);
        $data['nav_links'] = array (
            array ('name' => 'Dashboard', 'link' => 'dashboard'),
            array ('name' => 'Profile', 'link' => "profile/{$id}"),
        );

        $logged_in = $this->session->userdata('is_login');
        if ($logged_in == FALSE) {
            $this->session->sess_destroy();
            redirect('/');
        } else if ($this->session->userdata('user') !== $id) {
            redirect(base_url('users/profile/'.$this->session->userdata('user')));
        }
        $this->load->view('users/profile', $data);
    }

    /**
     * Display the edit profile page.
     *
     * @param int $id - The ID of the user.
     */
    public function edit($id)
    {
        $data['flash_message'] = $this->session->flashdata('message');
        $data['title'] = 'Edit Profile';
        $data['link'] = 'Log off';
        $data['link_path'] = 'users/log_off';
        $data['style'] = 'edit.css';
        $data['user'] = $this->user->get_user_by_id($id);
        $data['nav_links'] = array (
            array ('name' => 'Dashboard', 'link' => 'dashboard'),
            array ('name' => 'Profile', 'link' => "profile/$id"),
        );

        $logged_in = $this->session->userdata('is_login');
        if ($logged_in == FALSE) {
            $this->session->sess_destroy();
            redirect('/');
        } else if ($this->session->userdata('user') !== $id) {
            redirect(base_url('users/edit/'.$this->session->userdata('user')));
        }

        $this->load->view('users/edit', $data);
    }

    /**
     * Edit user information and password.
     *
     * @param int $id - The ID of the user.
     */
    public function edit_user_info($id)
    {
        if ($this->input->post('edit_info')) {
            $validate = $this->user->edit_info($id);
            if ($validate == TRUE) {
                $this->session->set_flashdata('message', $validate);
            }
            $this->session->set_flashdata('message', $validate);
        }

        if ($this->input->post('edit_password')) {
            $validate = $this->user->edit_password($id);
            if ($validate == TRUE) {
                $this->session->set_flashdata('message', $validate);
            }
            $this->session->set_flashdata('message', $validate);
        }

        redirect("users/edit/{$id}");
    }
}
