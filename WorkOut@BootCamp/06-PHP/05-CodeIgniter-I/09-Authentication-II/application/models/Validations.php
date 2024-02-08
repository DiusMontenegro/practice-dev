<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Contact extends CI_Model
{
    public function __construct() {
        date_default_timezone_set('Asia/Manila');
        $this->load->database();
    }

    // CREATE
    function add_contact($data)
    {
        $query =
            "INSERT INTO contacts(name, contact_number, created_at, updated_at)
            VALUES (?,?,?,?)";
        $values = array($data['name'], $data['contact_number'], date('F j, Y g:i A'), date('F j, Y g:i A'));
        return $this->db->query($query, $values);
    }

    // READ all data
    function get_contacts()
    {
        return $this->db->query("SELECT * FROM contacts")->result_array();
    }

    // READ one data
    function get_contact($id)
    {
        return $this->db->query("SELECT * FROM contacts WHERE id = ?", array($id))->row_array();
    }

    // UPDATE one data
    function edit_contact($data)
    {
        $query = "UPDATE contacts
                SET name = ?, contact_number = ?, updated_at = ?
                WHERE id = ?";
        $values = array(
            $data['name'], $data['contact_number'], date('F j, Y g:i A'), $data['id']
        );
        return $this->db->query($query, $values);
    }

    // DELETE one data
    function delete_contact($id)
    {
        return $this->db->query("DELETE FROM contacts WHERE id = ?", array($id));
    }

}
