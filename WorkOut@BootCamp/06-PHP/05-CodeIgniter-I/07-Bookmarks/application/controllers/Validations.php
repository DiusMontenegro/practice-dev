<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Custom_validation extends CI_Controller {

    public $form_validation;

    public function __construct() {
        parent::__construct();
        $this->load->library('form_validation');
    }

    public function validateEmail($email) {
        $this->form_validation->set_message('validateEmail', 'Please enter a valid email address.');

        return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
    }

    public function validateFirstName($firstName) {
        $this->form_validation->set_message('validateFirstName', 'Your first name should not contain any numbers.');

        return ! $this->containsNumbers($firstName);
    }

    public function validateLastName($lastName) {
        $this->form_validation->set_message('validateLastName', 'Your last name should not contain any numbers.');

        return ! $this->containsNumbers($lastName);
    }

    public function validateDate($date) {
        $this->form_validation->set_message('validateDate', 'Please follow the format (mm/dd/yyyy).');

        return (bool) DateTime::createFromFormat('m/d/Y', $date);
    }

    public function validatePhoneNumber($phoneNumber) {
        $this->form_validation->set_message('validatePhoneNumber', 'Please enter a valid 11-digit number.');

        return $this->isNumericWithLength($phoneNumber, 11);
    }

    public function validateURL($url) {
        $this->form_validation->set_message('validateURL', 'Please enter a valid URL.');

        return filter_var($url, FILTER_VALIDATE_URL) !== false;
    }

    // Helper method to check if a string contains numbers
    protected function containsNumbers($str) {
        return strcspn($str, '0123456789') !== strlen($str);
    }

    // Helper method to check if a string is numeric with a specific length
    protected function isNumericWithLength($str, $length) {
        return ctype_digit($str) && strlen($str) === $length;
    }
}
