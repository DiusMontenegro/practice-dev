<?php
/**
 * File: Replies.php
 * Date: 02/19/2024
 * Programmer: Dius Montenegro
 * Description: This file defines the Replies controller, responsible for handling replies in the application.
 */

defined('BASEPATH') OR exit('No direct script access allowed');
date_default_timezone_set('Asia/Manila');

class Replies extends CI_Controller {

    public $input, $session, $reply;

    /**
     * Validate and add a reply to a post.
     *
     * @param int $product_id - The ID of the product related to the reply.
     * @param int $post_id - The ID of the post to which the reply is added.
     */
    public function validate_replies($product_id, $post_id)
    {
        if ($this->input->post('add_reply')) {
            $this->reply->validate_post($post_id);
        }
        redirect(base_url('products/show/'.$product_id));
    }

}
