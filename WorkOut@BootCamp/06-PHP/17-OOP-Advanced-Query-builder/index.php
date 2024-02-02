<?php
    require("./database.php");
    require("./sites.php");
    require("./clients.php");

    $sites = new Sites();
    $sites->connect('lead_gen_business');
    $resultSites = $sites->select(["client_id", $sites->count])->group_by('client_id')->having($sites->count, ">", 5)->get();

    $clients = new Clients();
    $clients->connect('lead_gen_business');
    $resultClients = $clients->where(["last_name" => "Owen"])->get();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Query Builder</title>
    <link rel="stylesheet" href="./main.css.php">
</head>
<body>
    <h2>Lead Report</h2>
    <!-- Sites -->
    <table>
        <thead>
            <tr>
<?php foreach (array_keys($resultSites[0]) as $header) { ?>
                <th><?= $header ?></th>
<?php   }?>
            </tr>
        </thead>
        <tbody>
<?php   foreach($resultSites as $results) {?>
            <tr>
                <td><?=$results['client_id']?></td>
                <td><?=$results['COUNT(*)']?></td>
            </tr>
<?php   }?>
        </tbody>
    </table>
    <!-- Clients -->
    <h2>Client List:</h2>
    <table>
        <thead>
            <tr>
<?php   foreach (array_keys($resultClients[0]) as $header) { ?>
                <th><?= $header ?></th>
<?php   }?>
            </tr>
        </thead>
        <tbody>
<?php foreach ($resultClients as $row) {?>
            <tr>
<?php foreach ($row as $value) {?>
                <td><?= $value ?></td>
<?php       } ?>
            </tr>
<?php   }?>
        </tbody>
    </table>
</body>
</html>
