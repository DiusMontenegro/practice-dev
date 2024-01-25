<?php
    $cards = array(
        "King" => 13,
        "Queen" => 12,
        "Jack" => 11,
        "Ace" => 1
    );
    function card_value($arr) {
        echo "List of keys in the array: <br>";
        echo "<ul>";
        foreach ($arr as $key => $value) {
            echo "<li>$key</li>";
        }
        echo "</ul>";
        echo "<br>";
        foreach ($arr as $key => $value) {
            echo "The value of {$key} in Pyramid Solitaire is {$value}<br>";
        }
    }
    card_value($cards);
?>