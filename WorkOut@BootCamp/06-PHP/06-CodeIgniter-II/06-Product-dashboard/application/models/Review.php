<?php
/**
 * File: Review.php
 * Date: 02/19/2024
 * Programmer: Dius Montenegro
 * Description: This file defines the Review model, handling database interactions related to reviews.
 */

defined('BASEPATH') OR exit('No direct script access allowed');

class Review extends CI_Model
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
     * Retrieve reviews for a specific product from the database.
     *
     * @param int $product_id - The ID of the product for which reviews are retrieved.
     * @return array - Array containing all reviews for the specified product with formatted creation time.
     */
    public function get_review_by_id($product_id)
    {
        return $this->db->query(
            "SELECT
                id, user_id, product_id, user, content,
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
            FROM posts
            WHERE product_id = ?
            ORDER BY updated_at DESC", array($product_id)
        )->result_array();
    }

    /**
     * Add a new review for a specific product to the database.
     *
     * @param int $product_id - The ID of the product for which the review is added.
     */
    public function add_review($product_id)
    {
        $user = $this->user->get_user_by_id($this->session->userdata("user"));
        $sql = "INSERT INTO posts(user_id, product_id, user, content, created_at, updated_at)
        VALUES (?,?,?,?,NOW(),NOW())";

        $values = array(
            $this->security->xss_clean($this->session->userdata("user")),
            $this->security->xss_clean($product_id),
            $this->security->xss_clean($user['first_name']." ".$user['last_name']),
            $this->security->xss_clean($this->input->post('review')),
        );

        $this->db->query($sql, $values);
    }

    /**
     * Validate form input for adding a review.
     *
     * @param int $product_id - The ID of the product for which the review is added.
     * @return string - Success or error message.
     */
    public function validate_post($product_id)
    {
        $this->form_validation->set_error_delimiters('<p class="errors">❌ ', '</p>');
        $this->form_validation->set_rules('review','Review','required');

        if ($this->form_validation->run()) {
            $this->add_review($product_id);
            return "<p class='success'> ✅ A new post was added.</p>";
        }
        return validation_errors();
    }
}
