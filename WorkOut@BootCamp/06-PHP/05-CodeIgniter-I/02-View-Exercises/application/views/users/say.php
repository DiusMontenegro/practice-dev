<?php
    $message = $this->session->userdata('message');
    $number =  $this->session->userdata('number');
    for ($i = 1; $i <= $number; $i++) {
?>
    <p><?="$i $message"?>.</p>
<?php }?>
