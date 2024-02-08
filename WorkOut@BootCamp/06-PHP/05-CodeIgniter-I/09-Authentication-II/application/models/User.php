<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User extends CI_Model
{
    public function __construct() {
        date_default_timezone_set('Asia/Manila');
        $this->load->database();
    }

    // CREATE
    public function add_user($data)
    {
        $password = $data['password'];
        $salt = bin2hex(openssl_random_pseudo_bytes(22));
        $encrypted_password = md5($password . '' . $salt);
        $query =
            "INSERT INTO users(first_name, last_name, email, contact_number,        password, salt, created_at, updated_at)
            VALUES (?,?,?,?,?,?,?,?)";
        $values = array(
            $data['first_name'], $data['last_name'], $data['email'], $data['contact_number'], $encrypted_password, $salt, date('F j, Y g:i A'), date('F j, Y g:i A')
        );
        return $this->db->query($query, $values);
    }

    public function get_user_by_email($data)
    {
        return $this->db->query("SELECT * FROM users WHERE email = ? OR contact_number = ?", array($data, $data))->row_array();
    }

    public function get_user_by_id($data)
    {
        return $this->db->query("SELECT * FROM users WHERE id = ?", array($data))->row_array();
    }

    public function validate_email($data)
    {
        $email = $data["email_or_phone"];
        $verifiedEmail = filter_var($email, FILTER_VALIDATE_EMAIL);
        if (!$verifiedEmail) {
            $this->get_user_contact($data);
        }
        return true;

    }

    public function get_user_contact($data)
    {
        $query = $this->db->query("SELECT * FROM users WHERE contact_number = ?", array($data["email_or_phone"]))->row_array();
        if ($query) {
            return true;
        }
        return false;
    }
}
