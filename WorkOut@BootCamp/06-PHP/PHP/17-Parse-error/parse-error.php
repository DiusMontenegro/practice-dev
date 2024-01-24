<?php
    $array = array("echo", "var_dump");
    echo "<h3>Different ways of debugging:</h3>";

    echo "<ul>";
    for($i = 0; $i < count($array); $i++) {
        echo "<li>{$array[$i]}</li>";
    }
    echo "</ul>";

    var_dump($array);

    echo "<h3>Checking if variable is set:</h3>";
    $var1 = "var";
    $var2 = "";
    $var3 = '';
    $var4 = null;

    if(isset($var1, $var2, $var3)) {
        echo "The value of var1, var2, var3 are set. <br>";
    }
    if(empty($var4)) {
        echo "The value of var4 is null, therefore, not set. <br>";
    }
    if(empty($var5)) {
        echo "Non-declared var5 is not set. <br>";
    }
?>
