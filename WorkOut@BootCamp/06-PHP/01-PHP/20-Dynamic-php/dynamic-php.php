<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./main.css.php">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="./main.js.php"></script>
</head>
<body>
    <p>This text changes its size every reload.</p>
    <em>Thanks to PHP that generated a CSS File!</em>
    <h1>Generated Ticket</h1>
<?php $ticket_number = rand(0, 5); ?>
    <img src='image.php?ticket_number=$ticket_number' alt='Ticket $ticket_number'>
</body>
</html>