<?php
    $list = array(6, 1, 3, 5, 7);
    $list2 = array(4, "Michael", 3, "Karen", 2, "Rogie");
    function convert_to_blanks ($arr) {
        for ($i = 0; $i < count($arr); $i++) {
            if (gettype($arr[$i]) === "integer") {
                echo str_repeat("_ ", $arr[$i])."<br>";
            } else {
                $first_letter = substr($arr[$i], 0, 1) ;
                $remaining = substr($arr[$i], 1);
                echo "$first_letter".str_repeat("_ ", strlen($remaining))."<br>";
            }
        }
    }
    convert_to_blanks($list);
    echo "<br>";
    convert_to_blanks($list2);
?>