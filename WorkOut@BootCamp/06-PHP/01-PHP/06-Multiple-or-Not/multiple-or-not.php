<?php
    for ($i = 1; $i <= 1000; $i++) {
        if ($i % 3 !== 0) {
            echo $i." => Not Multiple <br>";
        } else {
            echo $i." => Multiple <br>";
        }
    }
?>