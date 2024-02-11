<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Billing extends CI_Model
{
    public function __construct() {
        date_default_timezone_set('Asia/Manila');
        $this->load->database();
    }

    // Get all method
    // Retrieves all billing data for the year 2011.
    // @return array An array containing billing data grouped by month and year.

    public function get_all()
    {
        $sql = "SELECT DATE_FORMAT(charged_datetime, '%M') AS Month, YEAR(charged_datetime) AS Year, SUM(amount) AS `Total Cost`
        FROM billing
        WHERE charged_datetime BETWEEN '2011-01-01' AND '2011-12-31'
        GROUP BY DATE_FORMAT(charged_datetime, '%M')";
        return $this->db->query($sql)->result_array();
    }

    // Get results method
    //
    //  Retrieves billing data based on the specified start and end dates.
    //
    //  @param array $data An array containing start_date and end_date.
    //  @return array An array containing filtered billing data grouped by month and year.
    //
    public function get_results($data) {
        // SQL query to retrieve billing data based on start_date and end_date
        $sql = "SELECT DATE_FORMAT(charged_datetime, '%M') AS Month, YEAR(charged_datetime) AS Year, SUM(amount) AS `Total Cost`
        FROM billing
        WHERE DATE_FORMAT(charged_datetime, '%m/%d/%Y') BETWEEN '{$data['start_date']}' AND '{$data['end_date']}'
        GROUP BY DATE_FORMAT(charged_datetime, '%M')";

        // Execute the query and return the result as an array
        return $this->db->query($sql)->result_array();
    }
}
