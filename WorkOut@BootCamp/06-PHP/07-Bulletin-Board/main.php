<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bulletin Board</title>
    <link rel="stylesheet" href="./main.css.php">
</head>
<body id="bulletin-board">
    <div class='container'>
        <img id="palm-leaves" src="./img/palm-leaves.png" alt="leaves">
        <h2>" Bulletin Board "</h2>
        <div id='announcements' >
<?php   foreach ($_SESSION['bulletin'] AS $events) { ?>
            <div>
                <h3><?= $events['created_at'] ?> - <?= $events['title'] ?></h3>
                <p>- <?= $events['details'] ?></p>
                <img id="pin" src="./img/pin.png" alt="unpin">
            </div>
<?php   }?>
        </div>
        <img id="beach" src="./img/beach.png" alt="summer">
        <form action="./process.php" method="POST">
            <button id="add-new" name="add-new" value="add-new" type="submit">Add</button>
        </form>
    </div>
</body>
</html>
