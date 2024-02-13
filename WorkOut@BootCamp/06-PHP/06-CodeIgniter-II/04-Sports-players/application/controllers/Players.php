<?php
defined('BASEPATH') OR exit('No direct script access allowed');
date_default_timezone_set('Asia/Manila');

class Players extends CI_Controller {

    /**
     * Instance variable to hold Player model object.
     *
     * var Player
     */
    public $player;

    /**
     * Default method for displaying players.
     * Retrieves players data and loads the corresponding view.
     */
    public function index()
    {
        $data['players'] = $this->player->get_players();
        $this->load->view('players', $data);
    }

    /**
     * Method for handling player search functionality.
     * Retrieves players data based on search criteria and loads the corresponding view.
     */
    public function search() {
        $data['players'] = $this->player->get_players();
        $this->load->view('players', $data);
    }
}

