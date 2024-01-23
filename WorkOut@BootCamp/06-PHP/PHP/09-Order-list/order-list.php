<?php
    $x = array('Spaghetti', 'Pizza', 'Iced tea');

    function print_orders($arr) {
        for ($i = 0; $i < count($arr); $i++) {
            echo "<li>{$arr[$i]}</li>";
        }
    }

    echo "<ol>";
    print_orders($x);
    echo "</ol>";
?>