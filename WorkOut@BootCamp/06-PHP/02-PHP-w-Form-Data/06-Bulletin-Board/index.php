<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bulletin Board Entry</title>
    <link rel="stylesheet" href="main.css.php">
</head>
<body id="entry">
<?php   if (!empty($_SESSION['error_messages'])) {
        foreach ($_SESSION['error_messages'] as $errors) {
?>
    <h4><?= $errors ?></h4>
<?php }} ?>
    <form id="entry-form" action="./process.php" method="POST">
        <img src="./img/palm-tree.png" alt="palm-tree">
        <h1>Bulletin Board Entry</h1>
        <label for="subject-input">Subject:</label>
        <input id="subject-input" name="subject" type="text" placeholder="title max. 250 characters">
        <label for="details-input">Details:</label>
        <textarea name="details" id="details-input" placeholder="details max. 500 characters"></textarea>
        <input id="add" type="submit" name="add" value="Add">
        <input id="skip" type="submit" name="skip" value="Skip">
    </form>
</body>
</html>
