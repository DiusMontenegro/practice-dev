<?php
/**
 * File: Reply.php
 * Date: 02/19/2024
 * Programmer: Dius Montenegro
 * Description: This file defines the Reply model, handling database interactions related to replies.
 */

defined('BASEPATH') OR exit('No direct script access allowed');

class Reply extends CI_Model
{
    /**
     * Constructor method to set the default timezone and load the database.
     */
    public function __construct()
    {
        date_default_timezone_set('Asia/Manila');
        $this->load->database();
    }

    /**
     * Retrieve all replies from the database.
     *
     * @return array - Array containing all replies with formatted creation time.
     */
    public function get_replies()
    {
        return $this->db->query(
            "SELECT
                id, user_id, post_id, user, reply,
                CONCAT(
                    IF(TIMESTAMPDIFF(MINUTE, created_at, NOW()) < 60,
                        CONCAT(TIMESTAMPDIFF(MINUTE, created_at, NOW()), ' minute'),
                        IF(TIMESTAMPDIFF(HOUR, created_at, NOW()) < 24,
                            CONCAT(TIMESTAMPDIFF(HOUR, created_at, NOW()), ' hour'),
                            IF(TIMESTAMPDIFF(DAY, created_at, NOW()) < 7,
                                CONCAT(TIMESTAMPDIFF(DAY, created_at, NOW()), ' day'),
                                ''
                            )
                        )
                    ),
                    IF(
                        TIMESTAMPDIFF(MINUTE, created_at, NOW()) != 1 AND
                        TIMESTAMPDIFF(HOUR, created_at, NOW()) != 1 AND
                        TIMESTAMPDIFF(DAY, created_at, NOW()) != 1, 's', ''
                    ),
                    ' ago'
                ) AS created_at
            FROM replies
            ORDER BY updated_at;"
        )->result_array();
    }

    /**
     * Add a new reply to the database.
     *
     * @param int $post_id - The ID of the post to which the reply is added.
     */
    public function add_reply($post_id)
    {
        $user = $this->user->get_user_by_id($this->session->userdata("user"));
        $sql = "INSERT INTO replies(user_id, post_id, user, reply, created_at, updated_at)
        VALUES (?,?,?,?,NOW(),NOW())";

        $values = array(
            $this->security->xss_clean($this->session->userdata("user")),
            $this->security->xss_clean($post_id),
            $this->security->xss_clean($user['first_name']." ".$user['last_name']),
            $this->security->xss_clean($this->input->post('reply')),
        );

        $this->db->query($sql, $values);
    }

    /**
     * Validate form input for adding a reply.
     *
     * @param int $post_id - The ID of the post to which the reply is added.
     * @return string - Success or error message.
     */
    public function validate_post($post_id)
    {
        $this->form_validation->set_error_delimiters('<p class="errors">❌ ', '</p>');
        $this->form_validation->set_rules('reply','Reply','required');

        if ($this->form_validation->run()) {
            $this->add_reply($post_id);
        }
        return validation_errors();
    }
}
