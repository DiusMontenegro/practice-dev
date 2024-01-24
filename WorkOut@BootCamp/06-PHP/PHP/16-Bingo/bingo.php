<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bingo</title>
    <link rel="stylesheet" href="./styles.css">
</head>
<body>
    <?php table(); ?>
</body>
</html>
<?php
    function table_head($row, $data) {
        $bingo = "BINGO";
        for ($i = 0; $i < $row; $i++) {
            echo "<tr class='bg-green'>";
                for ($j = 0; $j < $data; $j++) {
                    echo "<th>{$bingo[$j]}</th>";
                }
            echo "</tr>";
        }
    }
    function table_body($row, $data) {
        for ($i = 0; $i < $row; $i++) {
            $num = $i + 2; // 2
            $rowbg = ($num % 2 === 0 ? 'bg-red' : 'bg-blue');
            echo "<tr class='$rowbg'>";
                for ($j = 0; $j < $data; $j++) { //j = 0>1>2 , data = 5
                    echo "<td>";
                        echo $num * ($j + 1); // cycle=1,2,3
                    echo "</td>";
                }
            echo "</tr>";
        }
    }
    function table() {
        echo "<table>";
            echo "<thead>";
                table_head(1, 5);
            echo "</thead>";
            echo "<tbody>";
                table_body(5, 5);
            echo "</tbody>";
        echo "</table>";
    }
?>
