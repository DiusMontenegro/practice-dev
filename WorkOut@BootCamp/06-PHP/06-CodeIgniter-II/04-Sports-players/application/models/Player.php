<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Player extends CI_Model
{
    /**
     * Constructor method for Player class.
     * Initializes the default timezone and loads the database.
     */
    public function __construct()
    {
        date_default_timezone_set('Asia/Manila');
        $this->load->database();
    }

    /**
     * Retrieves players from the database based on specified search criteria.
     *
     * return An array containing player information matching the search criteria.
     */
    public function get_players()
    {
        if (!$this->input->post()) {
            return $this->db->query("SELECT * FROM players")->result_array();
        }

        $name = $this->security->xss_clean($this->input->post("search"));
        $gender = $this->gender();
        $sports = $this->sports();

        $gender_condition = implode(' OR ', $gender);
        $sports_condition = implode(', ', $sports);

        $sql = "SELECT * FROM players WHERE 1 = 1";

        if ($name) {
            $sql .= " AND name LIKE '%$name%'";
        }
        if ($gender_condition) {
            $sql .= " AND gender IN ($gender_condition)";
        }
        if ($sports_condition) {
            $sql .= " AND (";
            $count = count($sports);
            foreach ($sports as $index => $sport) {
                $sql .= " sports LIKE '%$sport%'";
                if ($index < $count - 1) {
                    $sql .= " OR";
                }
            }
            $sql .= ")";
        }

        return $this->db->query($sql)->result_array();
    }

    /**
     * Retrieves the selected genders from the input.
     *
     * return An array containing selected genders.
     */
    public function gender()
    {
        $gender = array();

        if ($this->input->post('Female')) {
            $gender[] = "'" . $this->security->xss_clean($this->input->post('Female')) . "'";
        }
        if ($this->input->post('Male')) {
            $gender[] = "'" . $this->security->xss_clean($this->input->post('Male')) . "'";
        }
        return $gender;
    }

    /**
     * Retrieves the selected sports from the input.
     *
     * return An array containing selected sports.
     */
    public function sports()
    {
        $sports = array();

        if ($this->input->post('Basketball')) {
            $sports[] = $this->security->xss_clean($this->input->post('Basketball'));
        }
        if ($this->input->post('Volleyball')) {
            $sports[] = $this->security->xss_clean($this->input->post('Volleyball'));
        }
        if ($this->input->post('Baseball')) {
            $sports[] = $this->security->xss_clean($this->input->post('Baseball'));
        }
        if ($this->input->post('Soccer')) {
            $sports[] = $this->security->xss_clean($this->input->post('Soccer'));
        }
        if ($this->input->post('Football')) {
            $sports[] = $this->security->xss_clean($this->input->post('Football'));
        }
        return $sports;
    }
}
