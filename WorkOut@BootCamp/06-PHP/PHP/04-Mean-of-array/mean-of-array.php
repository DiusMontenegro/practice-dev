<?php
    $numbers = array(13, 143, 88, 65, 120);
    $mean = 0;

    for ($i = 0; $i < count($numbers); $i++) {
        $mean += $numbers[$i];
    }
    echo "The Mean value is: ".$mean/count($numbers);
?>