<?php
    session_start();
    if (empty($_SESSION["file"])) {
        session_destroy();
        header('Location: ./index.php');
    }
    ini_set('auto_detect_line_endings', false);
    $csv = fopen("./csv/{$_SESSION['file']}", "r");
    $head = fgetcsv($csv);
    if ($head === false || empty($head)) {
        fclose($csv);
        die();
    }
    $totalRows = 0;
    while (fgetcsv($csv) !== false) {
        $totalRows++;
    }
    fseek($csv, 0);
    $rowLimit = 51;
    $currentPage = isset($_GET['page']) ? intval($_GET['page']) : 1;
    $totalPages = ($totalRows + $rowLimit - 1) / $rowLimit;
    if ($currentPage < 1 || $currentPage > $totalPages) {
        $currentPage = 1;
    }
    $startRow = ($currentPage - 1) * $rowLimit;
    for ($i = 0; $i < $startRow; $i++) {
        fgetcsv($csv);
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>us-500</title>
    <link rel="stylesheet" href="./main.css.php">
</head>
<body>
    <a id="home" href="./process.php">Home</a>
    <table>
        <thead>
            <tr>
                <th>Item</th>
<?php   for ($i = 0; $i < count($head); $i++){?>
                <th><?= $head[$i] ?></th>
<?php   } ?>
            </tr>
        </thead>
        <tbody>
<?php
    for ($i = 0; $i < $rowLimit; $i++) {
        $line = fgetcsv($csv);
        if ($line === false) {
            break;
        }
        // Skip the first line
        if ($i === 0 && $currentPage === 1) {
            continue;
        }
?>
            <tr>
                <td><?= $i + ($currentPage - 1) * $rowLimit ?></td>
<?php       for ($j = 0; $j < count($line); $j++) { ?>
                <td><?= $line[$j] ?></td>
<?php       } ?>
            </tr>
<?php
    }
    fclose($csv);
?>
        </tbody>
    </table>
    <!-- Pagination Links -->
    <div id="links">
<?php   for ($page = 1; $page <= $totalPages; $page++) { ?>
<?php       if ($page == $currentPage) { ?>
        <span class="active-link"><?= $page ?></span>
<?php       } else { ?>
        <a href="?page=<?= $page ?>"><?= $page ?></a>
<?php       } ?>
<?php   } ?>
    </div>
</body>
</html>
