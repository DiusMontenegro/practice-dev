<?php
    $numbers = array(2, 5, 8, 11, 14);
    $sum = 0;
    
    for ($i = 0; $i < count($numbers); $i++) {
        $sum += $numbers[$i];
    }
    echo $sum;
?>