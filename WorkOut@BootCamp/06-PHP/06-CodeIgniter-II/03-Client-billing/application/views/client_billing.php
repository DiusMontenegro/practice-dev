<?php
defined('BASEPATH') OR exit('No direct script access allowed');
$this->load->view('partials/header');
    $csrf = array(
        'name' => $this->security->get_csrf_token_name(),
        'hash' => $this->security->get_csrf_hash()
    );

    if ($this->session->flashdata) {
?>
    <div>
        <p>$this->session->flashdata</p>
    </div>
<?php   }?>
    <div class="dates container">
        <form action=<?= base_url('billings/get_results')?> method="POST">
        <input type="hidden" name="<?=$csrf['name'];?>" value="<?=$csrf['hash'];?>" />
            <input class="datepicker" name="start_date" type="text" placeholder='Start date'>
            <input class="datepicker" name="end_date" type="text" placeholder='End date'>
            <input id="submit" type="submit">
        </form>
    </div>
    <div class="container">
        <h1>List of total charges per month:</h1>
        <table>
            <thead>
                <tr>
                    <th>Month</th>
                    <th>Year</th>
                    <th>Total Cost</th>
                </tr>
            </thead>
            <tbody>
<?php       foreach($results as $result) {?>
                <tr>
                    <td><?= $result['Month'] ?></td>
                    <td><?= $result['Year'] ?></td>
                    <td><?= $result['Total Cost'] ?></td>
                </tr>
<?php       }?>
            </tbody>
        </table>
    </div>
    <div class="chart container">
        <div id="chartContainer1"></div>
    </div>
<?php $this->load->view('partials/footer'); ?>
