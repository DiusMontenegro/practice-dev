<?php
    header('Content-type: application/javascript');
    $messages = array(
        "console.log('You are 100x better than before!');",
        "alert('You are 140x better than before!');",
    );
    $message = $messages[rand(0,1)];
?>
$(document).ready(function(){
  <?= $message ?>
});