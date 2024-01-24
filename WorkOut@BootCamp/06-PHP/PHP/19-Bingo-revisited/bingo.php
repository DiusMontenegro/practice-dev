<?php 
    $rows = 5;
    $items = 5;
    $bingo = "BINGO";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bingo Revamped</title>
    <link rel="stylesheet" href="./styles.css">
</head>
<body>
    <main >
<?php   for ($i = 0; $i < strlen($bingo); $i++) { ?>
        <h1><?= $bingo[$i] ?></h1>
<?php }?>
<?php   for ($i = 0; $i < $rows; $i++) {
        $num = $i + 2;
?>
    <p>
<?php   for($j = 0; $j < $items; $j++) { 
        $bg = (($i + $j) % 2 === 0) ? 'bg-red' : 'bg-blue';
?>
        <a href="#" class="<?= $bg ?>"><?= $num * ($j + 1) ?></a>
<?php   } ?>   
    </p>    
<?php   } ?>
    </main>
</body>
</html>