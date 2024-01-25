<?php
// Part I: Create a function called 'exponential()' that reads each value in an array and returns a new array where each value has been computed with default exponent 3.
$digits = array(3, 12, 30);
function exponential($arr){
    $newArr = array();
    for ($i = 0; $i < count($arr); $i++) {
        $newArr[] = $arr[$i] ** 3;
    }
    return $newArr;
}
$result = exponential($digits);
var_dump($result); 
/* expected output:
        array (size=3)
        0 => int 27
        1 => int 1728
        2 => int 27000
*/
 // Part II: Modify this function so that you can pass an additional argument to this function. The function should compute each value in the array by this additional argument for exponent.
$digits = array(8,11, 4);
$result = exponential2($digits, 4);  
var_dump($result);
function exponential2($arr, $exponent){
    $newArr = array();
    for ($i = 0; $i < count($arr); $i++) {
        $newArr[] = $arr[$i] ** $exponent;
    }
    return $newArr;
}
/* This should dump which contains [4096, 14641,  256]. */
?>