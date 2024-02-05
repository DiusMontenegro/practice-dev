<?php
class Countdown extends CI_Controller
{
    public $session;
    public function main() {
        date_default_timezone_set('Asia/Manila');
        $current_datetime = date('F j, Y');
        $current_time = date('H:i:s');
        $endOfDay = date('23:59:59', strtotime($current_time));
        $remainingSeconds = strtotime($endOfDay) - strtotime($current_time);

        $data['date'] = array (
            "current_date"=> $current_datetime,
            "countdown" => $remainingSeconds
        );

        $this->load->view("partials/header");
        $this->load->view("main", $data);
        $this->load->view("partials/footer");
    }
}
