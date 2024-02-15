<?php
defined('BASEPATH') OR exit('No direct script access allowed');
$this->load->view("templates/header");
    // Ensure the 'count' variable is set, within the range [0, 20], and provide default value of 10 if not set.
    $count = $this->session->userdata('count');
    if(!isset($count)){
        $count = 10;
    }
    if ($count >= 20) {
        $count = 20;
    } else if ($count <= 0) {
        $count = 0;
    }

    // Generate CSRF token and hash for form submissions.
    $csrf = array(
        'name' => $this->security->get_csrf_token_name(),
        'hash' => $this->security->get_csrf_hash()
    );
?>
    <main class="container">
        <div class="d-block text-start">
            <h1 class="d-inline-block">
<?php       if (isset($request_count)) { ?>
                <span><?= $request_count[0]['count'] ?></span>
<?php       } ?>
                Leave Requests
            </h1>
            <form class="d-inline-block text-end" action=<?=base_url('requests')?> method="POST">
            <input type="hidden" name="<?=$csrf['name'];?>" value="<?=$csrf['hash'];?>" />
                <label>
                    <input name="date" type="radio" value="most_recent">
                    Most recent
                </label>
                <label>
                    <input name="date" type="radio" value="old_request">
                    Old requests
                </label>
                <select name="leave_type">
                    <option value="Vacation">Vacation</option>
                    <option value="Paid Leave">Paid Leave</option>
                    <option value="Sick Leave">Sick Leave</option>
                    <option value="Unpaid Leave">Unpaid Leave</option>
                    <option value="Half Day Unpaid">Half Day Unpaid</option>
                </select>
                <input class="border-none d-inline-block bg-success text-light" id="submit" type="submit" value="Search">
            </form>
        </div>
        <a class="reset bg-primary text-light decoration-none text-center text-dark btn-shadow d-block" href=<?= base_url() ?>>Reset</a>
        <table class="outline">
            <thead>
                <tr>
                    <th>Employee Name</th>
                    <th>Request Date</th>
                    <th>From Date</th>
                    <th>To Date</th>
                    <th>Leave Type</th>
                </tr>
            </thead>
            <tbody>
<?php       foreach ($requests as $request) { ?>
                <tr>
                    <td><?= $request['name'] ?></td>
                    <td><?= $request['request_date'] ?></td>
                    <td><?= $request['from_date'] ?></td>
                    <td><?= $request['to_date'] ?></td>
                    <td><?= $request['leave_type'] ?></td>
                </tr>
<?php       }?>
            </tbody>
        </table>
        <a class="show decoration-none text-center outline text-dark btn-shadow d-block <?= $visibility ?>" href=<?= base_url('requests/'.$count) ?>>Show More</a>
    </main>
<?php $this->load->view("templates/footer"); ?>
