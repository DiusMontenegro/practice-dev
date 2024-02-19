<?php
/**
 * File: Reviews.php
 * Date: 02/19/2024
 * Programmer: Dius Montenegro
 * Description: This file defines the Reviews controller, managing product reviews in the application.
 */

defined('BASEPATH') OR exit('No direct script access allowed');
date_default_timezone_set('Asia/Manila');

class Reviews extends CI_Controller {

    public $input, $session, $review;

    /**
     * Validate and add a review for a product.
     *
     * @param int $product_id - The ID of the product for which the review is submitted.
     */
    public function validate_posts($product_id)
    {
        if ($this->input->post('add_review')) {
            $validate = $this->review->validate_post($product_id);
            if ($validate == TRUE) {
                $this->session->set_flashdata('message', $validate);
            }
            $this->session->set_flashdata('message', $validate);
        }
        redirect(base_url('products/show/'.$product_id));
    }

}
