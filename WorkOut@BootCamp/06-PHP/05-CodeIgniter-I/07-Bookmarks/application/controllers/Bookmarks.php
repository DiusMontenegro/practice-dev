<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Bookmarks extends CI_Controller
{
    public $form_validation, $input, $session, $bookmark;
    public function index()
    {
        $details = $this->bookmark->get_bookmarks();
        $data['title'] = 'Bookmarks';
        $this->session->set_userdata('detail', $details);
        $this->load->view('main', $data);
    }

    public function destroy($id)
    {
        $data['record'] = $this->bookmark->get_bookmark_by_id($id);
        if ($this->input->post('delete') === $id) {
            $this->bookmark->delete_bookmark_by_id($id);
            redirect(base_url());
        }
        $data['title'] = 'Delete a Bookmark';
        $this->load->view('delete', $data);
    }

    public function add() {
        $this->load->library("form_validation");
        $this->form_validation->set_error_delimiters("<h6 class='error'>", "</h6>");
        $this->form_validation->set_rules("name", "Website Name", "required");
        $this->form_validation->set_rules("url", "URL", "required|valid_url");
        if($this->form_validation->run() === FALSE)
        {
            $data['title'] = 'Bookmarks';
            $this->load->view('main', $data);
        }
        else
        {
            $data = array(
                'folder' => $this->input->post('folder'),
                'name' => $this->input->post('name'),
                'url' => $this->input->post('url'),
            );
            $inserted_id = $this->bookmark->add_bookmark($data);

            if ($inserted_id) {
                $data['bookmark'] = array(
                    'status' => 'success',
                    'message' => 'Bookmark was successfully added!'
                );
                redirect(base_url());
            } else {
                $data['bookmark'] = array(
                    'status' => 'error',
                    'message' => 'Bookmark add unsuccessful.'
                );
                redirect(base_url());
            }
        }
    }
}
