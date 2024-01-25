<?php
    echo "Practice Starts... <br><br>";
    $success = 0;
    $missed = 0;
    for ($i = 1; $i <= 1000; $i++) {
        echo "Attempt #$i: Shooting the ball...";
        $attempt = rand(0,1);
        if ($attempt === 0) {
            echo "You Suck! ...";
            $success++;
            echo "Got {$success}x success and {$missed}x missed attempt/s so far"; 
            echo "<br><br>";
        } else {
            echo "Sucess! ...";
            $missed++;
            echo "Got {$success}x success and {$missed}x missed attempt/s so far";
            echo "<br><br>";
        }
    }
?>