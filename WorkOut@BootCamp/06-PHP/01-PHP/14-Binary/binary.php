<?php
    $binary = array( 1, 1, 0, 1, 1, 0, 1); 
    function get_count($arr) {
        $zero_count = 0;
        $ones_count = 0;
        for ($i = 0; $i < count($arr); $i++) {
            if ($arr[$i] === 0) {
                $zero_count++;
            } else {
                $ones_count++;
            }
        }
        $newArr = array("zeroes" => "$zero_count", "ones" => "$ones_count");
        return $newArr;
    }
    $output = get_count($binary); 
    var_dump($output); 
    //$output should be equal to array("zeroes" => 2,  "ones" => 5);
?>