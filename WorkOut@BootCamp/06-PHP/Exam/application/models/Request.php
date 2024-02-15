<?php
defined('BASEPATH') OR exit('No direct script access allowed');
date_default_timezone_set('Asia/Manila');
class Request extends CI_Model {

    /**
     * DOCU: Retrieves the latest 5 requests from the database.
     * @return array Array containing the all data data.
     *
     * Owner: Dius - 02/15/2024
     */
    public function get_requests() {
        $sql = "SELECT * FROM requests LIMIT 5";
        return $this->db->query($sql)->result_array();
    }

    /**
     * DOCU: Retrieves requests up to a specified limit based on the provided ID.
     * @param int $id The limit for the number of requests to retrieve.
     * @return array Array containing the requested data.
     *
     * Owner Dius - 02/15/2024
     */
    public function get_requests_by_id($id) {
        if ($id >= 20) {
            $id = 20;
        } else if ($id <= 0) {
            $id = 0;
        }
        $sql = "SELECT * FROM requests LIMIT $id";
        return $this->db->query($sql)->result_array();
    }

    /**
     * DOCU: Retrieves records based on user input for date and leave type.
     * @return array Array containing the requested data.
     *
     * Owner Dius - 02/15/2024
     */
    public function get_record()
    {
        if (!$this->input->post()) {
            return $this->db->query("SELECT * FROM requests LIMIT 5")->result_array();
        }

        $date = $this->security->xss_clean($this->input->post("date"));
        $leave_type = $this->security->xss_clean($this->input->post("leave_type"));

        $sql = "SELECT * FROM requests WHERE ";

        if ($date && $date === 'most_recent') {
            $sql .= "request_date >= '02/05/2024'";
        }
        if ($date && $date === 'old_request') {
            $sql .= "request_date < '02/05/2024'";
        }
        if (!$date && $leave_type ) {
            $sql .= "leave_type = '$leave_type'";
        }
        if ($leave_type) {
            $sql .= " AND leave_type = '$leave_type'";
        }

        return $this->db->query($sql)->result_array();
    }

    /**
     * DOCU: Retrieves the count of records based on user input for date and leave type.
     * @return array Array containing the count of records.
     *
     * Owner Dius - 02/15/2024
     */
    public function get_count()
    {
        if (!$this->input->post()) {
            return $this->db->query("SELECT COUNT('name') AS count FROM requests")->result_array();
        }

        $date = $this->security->xss_clean($this->input->post("date"));
        $leave_type = $this->security->xss_clean($this->input->post("leave_type"));

        $sql = "SELECT COUNT('name') AS count FROM requests WHERE ";

        if ($date && $date === 'most_recent') {
            $sql .= "request_date >= '02/05/2024'";
        }
        if ($date && $date === 'old_request') {
            $sql .= "request_date < '02/05/2024'";
        }
        if (!$date && $leave_type ) {
            $sql .= "leave_type = '$leave_type'";
        }
        if ($leave_type) {
            $sql .= " AND leave_type = '$leave_type'";
        }

        return $this->db->query($sql)->result_array();
    }
}
