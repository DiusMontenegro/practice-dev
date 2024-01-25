<?php
    $numbers = array();
    for ($i = 0; $i <= 10000; $i++) {
        if ($i % 2 === 0) {
            $numbers[] = $i;
        }
    }
    var_dump($numbers);
?>