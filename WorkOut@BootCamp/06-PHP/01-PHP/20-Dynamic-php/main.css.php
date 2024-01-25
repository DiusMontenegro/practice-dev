<?php
header('Content-type: text/css');
$size = rand(15,30);
$colors = array ('green', 'blue', 'red', 'yellow');
$color = $colors[rand(0,3)];
?>
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-align: center;
    padding-top: 20px;
}
p {
    font-size: <?= $size + 10 ?>px;
    color: <?= $color ?>;
}
em {
    font-size: <?= $size ?>px;
    color: <?= $colors[rand(1,3)] ?>;
}
img {
    border: 1px solid black;
    margin-top: 20px;
}
