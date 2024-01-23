<?php
    $languages = array('PHP', 'JS', 'Ruby');
    function condition_1($arr) {
        echo "<select>";
            for ($i = 0; $i < count($arr); $i++) {
                echo "<option>$arr[$i]</option>";
            }
        echo "</select>";
        echo "<br><br>";
    }
    function condition_2($arr) {
        echo "<select>";
            foreach ($arr as $value) {
                echo "<option>$value</option>";
            } 
        echo "</select>";
        echo "<br><br>";
    }
    function condition_3($arr) {
        array_push($arr,'HTML','CSS'); 
        echo "<select>";
            foreach ($arr as $value) {
                echo "<option>$value</option>";
            } 
        echo "</select>";
        echo "<br><br>";
    }
    condition_1($languages); // 1
    condition_2($languages); // 2
    condition_3($languages); // 3 & 4
?>