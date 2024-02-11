<?php defined('BASEPATH') OR exit('No direct script access allowed');?>
<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $title ?></title>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.13.2/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="/resources/demos/style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="https://canvasjs.com/assets/script/jquery-1.11.1.min.js"></script>
    <script src="https://canvasjs.com/assets/script/jquery-ui.1.11.2.min.js"></script>
    <script src="https://cdn.canvasjs.com/jquery.canvasjs.min.js"></script>
    <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.js"></script>
    <link href="<?= base_url('assets/styles.css');?>" rel="stylesheet">
    <script src=<?= base_url('assets/script.js');?>></script>
    <script>
    var options1 = {
        animationEnabled: true,
        title: {
            text: "Client Billing - 2011"
        },
        data: [{
            type: "column", //change it to line, area, bar, pie, etc
            legendText: "Months",
            showInLegend: true,
            dataPoints: [
<?php       foreach ($results as $result) { ?>
                { y: <?= $result['Total Cost'] ?>, label: "<?= $result['Month'] ?>" },
<?php       }?>
            ]
        }]
    };
    </script>
</head>
<body>

