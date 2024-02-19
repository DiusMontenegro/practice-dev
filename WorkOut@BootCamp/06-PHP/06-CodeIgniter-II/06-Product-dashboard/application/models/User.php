<?php
/**
 * Code written by Dius Montenegro on 02/19/2024.
 * This class represents a User model in a CodeIgniter application.
 */

defined('BASEPATH') OR exit('No direct script access allowed');

class User extends CI_Model
{
    public function __construct()
    {
        date_default_timezone_set('Asia/Manila');
        $this->load->database();
    }

    /**
     * Retrieve all users from the 'users' table.
     * @return array Array of user data.
     */
    public function get_all_user()
    {
       return $this->db->query("SELECT * FROM users")->result_array();
    }

    /**
     * Retrieve a user by email from the 'users' table.
     * @param string $email User email.
     * @return array|null Array of user data if found, null otherwise.
     */
    public function get_user_by_email($email) {
        return $this->db->query("SELECT * FROM users WHERE email = ?", array(
            $this->security->xss_clean($email),
        ))->row_array();
    }

    /**
     * Retrieve a user by ID from the 'users' table.
     * @param int $id User ID.
     * @return array|null Array of user data if found, null otherwise.
     */
    public function get_user_by_id($id)
    {
        return $this->db->query("SELECT * FROM users WHERE id = ?", array($id))->row_array();
    }

    /**
     * Retrieve all admins from the 'admins' table.
     * @return array Array of admin data.
     */
    public function get_all_admins()
    {
       return $this->db->query("SELECT * FROM admins")->result_array();
    }

    /**
     * Validate user input and register a new user in the 'users' table.
     * @return string Success message or validation errors.
     */
    public function validate_user()
    {
        $this->form_validation->set_error_delimiters('<p class="errors">❌ ', '</p>');
        $this->form_validation->set_rules('email','Email',"required|valid_email");
        $this->form_validation->set_rules('first_name','First Name','required|min_length[2]');
        $this->form_validation->set_rules('last_name','Last Name','required|min_length[2]');
        $this->form_validation->set_rules('password','Password','required|min_length[8]');
        $this->form_validation->set_rules( 'confirm_password', 'Password',
            'required|matches[password]',
            array(
                'required' => "Please confirm your password.",
                'matches' => "Your password doesn't match."
            )
        );

        if ($this->form_validation->run()) {
            $password = $this->input->post("password");
            $salt = bin2hex(openssl_random_pseudo_bytes(22));
            $encrypted_password = md5($password . '' . $salt);

            $sql = "INSERT INTO users(first_name, last_name, email, password, salt, created_at, updated_at)
            VALUES (?,?,?,?,?,NOW(),NOW())";

            $values = array(
                $this->security->xss_clean($this->input->post('first_name')),
                $this->security->xss_clean($this->input->post('last_name')),
                $this->security->xss_clean($this->input->post('email')),
                $this->security->xss_clean($encrypted_password),
                $this->security->xss_clean($salt),
            );

            $this->db->query($sql, $values);
            $this->set_admin();
            return "<p class='success'> ✅ Registration Successful</p>";
        }

        return validation_errors();
    }

    /**
     * Set the first registered user as an admin if no admins exist.
     */
    public function set_admin() {
        $set_admin = $this->get_all_admins();
        if (!isset($set_admin[0])) {
            $user = $this->get_user_by_id(1);
            $sql = "INSERT INTO admins(user_id, name, created_at, updated_at)
            VALUES (?,?,NOW(),NOW())";
            $values = array(
                $this->security->xss_clean($user['id']),
                $this->security->xss_clean($user['first_name']." ".$user['last_name']),
            );
            $this->db->query($sql, $values);
        }
    }

    /**
     * Validate user input and check user credentials for login.
     * Return Array of user data if login successful, null otherwise.
     */
    public function check_user()
    {
        $this->form_validation->set_error_delimiters('<p class="errors">❌ ', '</p>');
        $this->form_validation->set_rules("email","Email","required|valid_email");
        $this->form_validation->set_rules('password','Password','required|min_length[8]');

        if ($this->form_validation->run() === FALSE) {
            return validation_errors();
        }

        $email = $this->input->post('email');
        $password = $this->input->post("password");
        $user = $this->get_user_by_email($email);

        if ($user) {
            $salt = $user['salt'];
            $hashed_password = md5($password . '' . $salt);
        }

        if (!$user || $user['email'] !== $email || $user['password'] !== $hashed_password) {
            return '<p class="errors">❌ Incorrect email or password </p>';
        }

        if ($user && $user['password'] === $hashed_password) {

            $sql = "SELECT * FROM users WHERE email = ? AND password = ?";
            $values = array(
                $this->security->xss_clean($email),
                $this->security->xss_clean($hashed_password),
            );

            return $this->db->query($sql, $values)->row_array();
        }
    }

    /**
     * Validate user input and edit user information in the 'users' table.
     * @param int $id User ID.
     * @return string Success message or validation errors.
     */
    public function edit_info ($id) {
        $this->form_validation->set_error_delimiters('<p class="errors">❌ ', '</p>');
        $this->form_validation->set_rules('email','Email',"required|valid_email");
        $this->form_validation->set_rules('first_name','First Name','required|min_length[2]');
        $this->form_validation->set_rules('last_name','Last Name','required|min_length[2]');

        $user = $this->get_user_by_id($id);

        if ($user) {

        }

        if( $this->form_validation->run()) {
            $sql = "UPDATE users
                    SET first_name = ?,
                        last_name = ?,
                        email = ?,
                        updated_at = NOW()
                    WHERE id = ?";

            $values = array(
                $this->security->xss_clean($this->input->post('first_name')),
                $this->security->xss_clean($this->input->post('last_name')),
                $this->security->xss_clean($this->input->post('email')),
                $this->security->xss_clean($id)
            );

            $this->db->query($sql, $values);
            return "<p class='success'> ✅ Update Successful</p>";
        }
        return validation_errors();
    }

    /**
     * Validate user input and edit user password in the 'users' table.
     * @param int $id User ID.
     * Success message or validation errors.
     */
    public function edit_password ($id) {
        $this->form_validation->set_error_delimiters('<p class="errors">❌ ', '</p>');
        $this->form_validation->set_rules('current_password','Current Password',"required|min_length[8]");
        $this->form_validation->set_rules('new_password','New Password',"required|min_length[8]");
        $this->form_validation->set_rules( 'confirm_password', 'Password',
            'required|matches[new_password]',
            array(
                'required' => "Please confirm your password.",
                'matches' => "Your password doesn't match."
            )
        );

        if ($this->form_validation->run() === FALSE) {
            return validation_errors();
        }

        $password = $this->input->post("current_password");
        $user = $this->get_user_by_id($id);

        if ($user) {
            $salt = $user['salt'];
            $hashed_password = md5($password . '' . $salt);
        }

        if (!$user || $user['password'] !== $hashed_password) {
            return '<p class="errors">❌ Please enter your correct password.</p>';
        }

        if($this->form_validation->run()) {

            $new_password = $this->input->post('new_password');
            $salt = bin2hex(openssl_random_pseudo_bytes(22));
            $encrypted_password = md5($new_password . '' . $salt);
            $sql = "UPDATE users
                    SET password = ?,
                        salt = ?,
                        updated_at = NOW()
                    WHERE id = ?";

            $values = array(
                $this->security->xss_clean($encrypted_password),
                $this->security->xss_clean($salt),
                $this->security->xss_clean($id)
            );

            $this->db->query($sql, $values);
            return "<p class='success'> ✅ Password update successful</p>";
        }
    }
}
