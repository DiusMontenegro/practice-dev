<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Contacts extends CI_Controller {

    public $contact, $input, $form_validation;

    public function index()
    {
        $data['contacts'] = $this->contact->get_contacts();
        $data['title'] = 'Contacts';
        $this->load->view('contacts', $data);
    }

    public function new()
    {
        $this->form_validation->set_error_delimiters("<h6 class='error'>", "</h6>");
        $this->form_validation->set_rules("name", "Full Name", "required");
        $this->form_validation->set_rules("contact_number", "Contact Number", "required|numeric");
        if($this->form_validation->run() === FALSE)
        {
            $data['title'] = 'Create new contact';
            $this->load->view('new', $data);
        }
        else
        {
            $data = array(
                'name' => $this->input->post('name'),
                'contact_number' => $this->input->post('contact_number'),
            );
            $inserted_id = $this->contact->add_contact($data);
            if ($inserted_id) {
                $data['status'] = "success";
                $data['title'] = 'Create new contact';
                $this->load->view('new', $data);
            } else {
                $data['status'] = "add unsuccessful";
                $data['title'] = 'Create new contact';
                $this->load->view('new', $data);
            }
        }
    }

    public function show($id)
    {
        $data['record'] = $this->contact->get_contact($id);
        $data['title'] = 'View Contact';
        $this->load->view('show', $data);
    }

    public function edit($id)
    {
        $this->form_validation->set_error_delimiters("<h6 class='error'>", "</h6>");
        $this->form_validation->set_rules("name", "Full Name", "required");
        $this->form_validation->set_rules("contact_number", "Contact Number", "required|numeric");
        if($this->form_validation->run() === FALSE)
        {
            $data['record'] = $this->contact->get_contact($id);
            $data['title'] = 'Create new contact';
            $this->load->view('edit', $data);
        }
        else
        {
            $data['record'] = array(
                'id' => $id,
                'name' => $this->input->post('name'),
                'contact_number' => $this->input->post('contact_number'),
            );
            $updated_id = $this->contact->edit_contact($data['record']);
            $data['record'] = $this->contact->get_contact($id);
            $data['status'] = "success";
            if ($updated_id) {
                $data['status'] = "success";
                $data['title'] = 'Create new contact';
                $this->load->view('edit', $data);
            } else {
                $data['status'] = "Update unsuccessful";
                $data['record'] = $this->contact->get_contact($id);
                $data['title'] = 'Edit Contact';
                $this->load->view('edit', $data);
            }
        }
    }

    public function remove($id)
    {
        if ($this->input->post('action') === 'delete') {
            $this->contact->delete_contact($id);
            redirect(base_url());
        }
        $data['record'] = $this->contact->get_contact($id);
        $data['title'] = 'Remove Contact';
        $this->load->view('remove', $data);
    }
}
