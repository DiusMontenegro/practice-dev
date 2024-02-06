<?php
defined('BASEPATH') OR exit('No direct script access allowed');
$this->load->view('partials/header'); ?>
    <!-- header -->
    <form class="container" action=<?= base_url('MoneyButtonGame/bet');?> method="POST">
        <h1>Your Money: <?= $this->session->userdata('start_money') ?> </h1>
        <div class="reset-container">
            <input name="reset" id="reset" type="submit" value="Reset Game">
        </div>
        <h5>Chances left: <?= $this->session->userdata('chances') ?></h5>
    </form>
    <!-- section -->
    <section class="container">
<?php   foreach ($risks as $risk) { ?>
        <form class="money-form" method="POST" action=<?= base_url('MoneyButtonGame/bet');?>>
            <h2><?= $risk['type']?> Risk</h2>
            <button id=<?= $risk['type']?> class="bet" name=<?= $risk['type']?> value=<?= $risk['amount']?> type="submit">Bet</button>
            <p>by -<?= $risk['amount']?> up to <?= $risk['reward']?></p>
        </form>
<?php   } ?>
        <h3>Game Host:</h3>
        <div id="status">
<?php   if (isset($_SESSION['status'])) {
        $output = implode(" ", $_SESSION['message']);
?>
            <?= $output?>
<?php   } ?>
        </div>
    </section>
<?php $this->load->view('partials/footer'); ?>
