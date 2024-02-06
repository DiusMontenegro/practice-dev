<?php
defined('BASEPATH') OR exit('No direct script access allowed');
$this->load->view('partials/header'); ?>
    <div class="errors container">
        <?= validation_errors() ?>
    </div>
    <div class="container">
        <h1>Add a Bookmark</h1>
        <form action=<?= base_url('bookmarks/add')?> method="POST">
            <label>Name:
                <input type="text" name="name" placeholder="Enter a Website Name">
            </label>
            <label>URL:
                <input type="text" name="url" placeholder="Enter the URL">
            </label>
            <label>Folder:
                <select name="folder" >
                    <option value="favorites">Favorites</option>
                    <option value="others">Others</option>
                </select>
            </label>
            <input id="add" type="submit" value="Add">
        </form>
    </div>
    <div class="container">
        <h2>Bookmarks</h2>
        <table>
            <thead>
                <tr>
                    <th>Folder</th>
                    <th>Name</th>
                    <th>URL</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
<?php       foreach($this->session->userdata('detail') AS $detail) {?>
                <tr>
                    <td><?= $detail['folder'] ?></td>
                    <td><?= $detail['name'] ?></td>
                    <td><a href=<?= $detail['url'] ?>><?= $detail['url'] ?></a></td>
                    <td><a href=<?= base_url('bookmarks/destroy/'.$detail['id']) ?>>delete</a></td>
                </tr>
<?php       }?>
            </tbody>
        </table>
    </div>
<?php $this->load->view('partials/footer'); ?>
