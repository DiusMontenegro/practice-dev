<?php
defined('BASEPATH') OR exit('No direct script access allowed');
$this->load->view('partials/header'); ?>
    <div class="container">
        <h1>Contacts</h1>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Contact Number</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
<?php       foreach ($contacts AS $contact) {?>
                <tr>
                    <td><?= $contact['name'] ?></td>
                    <td><?= $contact['contact_number'] ?></td>
                    <td><a href=<?= base_url('contacts/show/'.$contact['id'])?>>Show</a> | <a href=<?= base_url('contacts/edit/'.$contact['id'])?>>Edit</a> | <a href=<?= base_url('contacts/remove/'.$contact['id'])?> class="remove">Remove</a>
                    </td>
                </tr>
<?php       }?>
            </tbody>
        </table>
        <a href=<?= base_url('contacts/new') ?>>Add new contact</a>
    </div>
<?php $this->load->view('partials/footer'); ?>
