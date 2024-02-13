<?php
defined('BASEPATH') OR exit('No direct script access allowed');
$this->load->view('partials/header');
    $genders = array( 'Female', 'Male' );
    $sports = array('Basketball', 'Volleyball', 'Baseball', 'Soccer', 'Football');
    $csrf = array(
        'name' => $this->security->get_csrf_token_name(),
        'hash' => $this->security->get_csrf_hash()
    );
?>
    <div class="container">
        <form id="filters" action=<?= base_url('players/search') ?> method="POST">
            <input type="hidden" name="<?=$csrf['name'];?>" value="<?=$csrf['hash'];?>" />
            <label id="search_label">Search Players
                <input name="search" id="search" type="text" placeholder="Search">
            </label>
<?php   foreach ($genders AS $gender) {?>
            <label>
                <input name=<?=$gender?> type="checkbox" value=<?=$gender?> multiple> <?= $gender ?>
            </label>
<?php   }?>
            <h2>Sports</h2>
<?php   foreach ($sports AS $sport) {?>
            <label>
                <input name=<?=$sport?> type="checkbox" value=<?=$sport?> multiple> <?= $sport ?>
            </label>
<?php   }?>
            <input id="submit" type="submit" value="Submit">
        </form>
        <div id="players">
<?php   foreach ($players AS $player) {?>
            <div class="card">
                <img src=<?= $player['image_url'] ?> alt=<?= $player['name'] ?>>
                <h3><?= $player['name'] ?></h3>
                <h4>Sports:</h4>
                <p><?= $player['sports'] ?></p>
            </div>
<?php   }?>
        </div>
    </div>
<?php $this->load->view('partials/footer'); ?>
