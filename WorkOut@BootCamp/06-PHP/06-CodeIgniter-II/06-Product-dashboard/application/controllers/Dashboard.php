<?php
/**
 * File: Dashboard.php
 * Date: 02/19/2024
 * Programmer: Dius Montenegro
 * Description: This file defines the Dashboard controller, which handles user and admin dashboards.
 */

defined('BASEPATH') OR exit('No direct script access allowed');
date_default_timezone_set('Asia/Manila');

class Dashboard extends CI_Controller {

    public $session, $user, $product;

    /**
     * Index method for user dashboard.
     */
    public function index()
    {
        $data['title'] = 'Product Dashboard - User';
        $data['link'] = 'Log off';
        $data['link_path'] = 'users/log_off';
        $data['style'] = 'dashboard.css';
        $data['products'] = $this->product->get_all_products();
        $data['user'] = $this->session->userdata('user');
        $data['nav_links'] = array (
            array ('name' => 'Dashboard', 'link' => 'dashboard'),
            array ('name' => 'Profile', 'link' => "profile/{$data['user']}"),
        );

        if ($this->session->userdata('is_login') == FALSE) {
            $this->session->sess_destroy();
            redirect('/');
        }

        $is_admin = $this->user->get_all_admins();

        if ($is_admin[0]['id'] === $data['user']) {
            $this->session->set_userdata('is_admin', TRUE);
            redirect('admin');
        }

        $this->load->view('dashboard/user', $data);
    }

    /**
     * Admin method for admin dashboard.
     */
    public function admin()
    {
        $data['title'] = 'Product Dashboard - Admin';
        $data['link'] = 'Log off';
        $data['link_path'] = 'users/log_off';
        $data['style'] = 'dashboard.css';
        $data['flash_message'] = $this->session->flashdata('message');
        $data['products'] = $this->product->get_all_products();
        $data['user'] = $this->session->userdata('user');
        $data['nav_links'] = array (
            array ('name' => 'Dashboard', 'link' => 'dashboard'),
            array ('name' => 'Profile', 'link' => "profile/{$data['user']}"),
        );

        $logged_in = $this->session->userdata('is_login');
        $is_admin = $this->session->userdata('is_admin');

        if ($logged_in == FALSE) {
            $this->session->sess_destroy();
            redirect('/');
        } else if ($logged_in == TRUE && $is_admin == FALSE) {
            redirect('dashboard');
        }
        $this->load->view('dashboard/admin', $data);
    }
}
