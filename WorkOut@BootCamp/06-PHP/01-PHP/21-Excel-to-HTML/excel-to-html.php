<?php
    ini_set('auto_detect_line_endings', true);
    $csv = fopen("./us-500.csv", "r");
    fgetcsv($csv);
    $head = array(
        'ID', 'first_name', 'last_name', 'company_name', 'address', 'city', 'county', 'state', 'zip', 'phone1', 'phone2', 'email', 'web'
    );
    $rowLimit = 500; 
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Excel to HTML</title>
    <link rel="stylesheet" href="./main.css.php">
</head>
<body>
    <table>
        <thead>
            <tr>
<?php   for ($i = 0; $i < count($head); $i++){?>
                <th><?= $head[$i] ?></th>
<?php   } ?>
            </tr>
        </thead>
        <tbody>
<?php   for ($i = 0; $i < $rowLimit; $i++) {
            $line = fgetcsv($csv);
        if ($line === false) {
            break;
        }
?>
            <tr>
                <td><?= $i + 1?></td>
<?php       for ($j = 0; $j < count($line); $j++) { ?>
                <td><?= $line[$j] ?></td>
<?php       } ?>
            </tr>
<?php } ?>
        </tbody>
    </table>
<?php fclose($csv); ?>
</body>
</html>
