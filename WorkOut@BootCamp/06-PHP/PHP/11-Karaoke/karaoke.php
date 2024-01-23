<?php
    for ($i = 1; $i <= 50; $i++) {
        $score = rand(0,100);
        switch ($score) {
            case $score < 50:
                echo "<h1>Your Score is: {$score}</h1>";
                echo "<h2>Never sing again, ever!</h2><br>";
                break;
            case $score < 80:
                echo "<h1>Your Score is: {$score}</h1>";
                echo "<h2>Practice more!</h2><br>";
                break;
            case $score < 95:
                echo "<h1>Your Score is: {$score}</h1>";
                echo "<h2>You're getting better!</h2><br>";
                break;
            case $score < 100:
                echo "<h1>Your Score is: {$score}</h1>";
                echo "<h2>What an excellent singer!</h2><br>";
        }
    }
?>