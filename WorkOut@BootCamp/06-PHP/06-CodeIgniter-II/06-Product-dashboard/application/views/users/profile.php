<?php
defined('BASEPATH') OR exit('No direct script access allowed');
$this->load->view('partials/header'); ?>
    <main class="container">
        <h1>Hello <?= $user['first_name']?>!</h1>
        <div class="information">
            <div class="profile">
                <img src=<?= base_url('assets/img/ss.jpg') ?> alt="">
                <h5><?= $user['first_name']." ".$user['last_name'] ?>
                    <span>
                        <?= $user['email']?>
                    </span>
                </h5>
            </div>
            <h4>Bio:</h4>
            <blockquote>“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”</blockquote>
            <a class="edit" href=<?= base_url('users/edit/'.$user['id']) ?>>Edit Profile</a>
        </div>
    </main>
<?php $this->load->view('partials/footer'); ?>
