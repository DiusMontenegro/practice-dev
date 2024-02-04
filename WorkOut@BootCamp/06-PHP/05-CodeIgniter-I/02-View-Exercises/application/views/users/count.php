<?php $count = $this->session->userdata('count');?>
    <h2>Website Visit Count: <?= $count ?></h2>
    <form action=<?php echo base_url('users/reset'); ?> method="POST">
        <input type="submit" name="reset" value="Reset">
    </form>
