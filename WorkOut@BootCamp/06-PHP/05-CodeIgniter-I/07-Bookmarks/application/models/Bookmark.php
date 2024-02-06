<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Bookmark extends CI_Model
{
    public function __construct() {
        $this->load->database();
    }

    function get_bookmarks()
    {
        return $this->db->query("SELECT * FROM websites")->result_array();
    }
    function get_bookmark_by_id($id)
    {
        return $this->db->query("SELECT * FROM websites WHERE id = ?", array($id))->row_array();
    }
    function delete_bookmark_by_id($id)
    {
        return $this->db->query("DELETE FROM websites WHERE id = ?", array($id));
    }
    function add_bookmark($data)
    {
        date_default_timezone_set('Asia/Manila');
        $query =
            "INSERT INTO websites(folder, name, url, created_at, updated_at)
            VALUES (?,?,?,?,?)";
        $values = array($data['folder'], $data['name'], $data['url'], date('F j, Y g:i A'), date('F j, Y g:i A'));
        return $this->db->query($query, $values);
    }
}
