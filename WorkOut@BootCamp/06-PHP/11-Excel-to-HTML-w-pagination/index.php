<?php
    session_start();
    require("connection.php");
    $allFiles = "SELECT * FROM files ORDER BY created_at";
    $_SESSION['files'] = fetch_all($allFiles);
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Excel to HTML</title>
  <link rel="stylesheet" href="main.css.php">
</head>
<body>
    <div class="status">
<?php   if (!empty ($_SESSION["error_messages"])) {
            foreach ($_SESSION['error_messages'] AS $error) {?>
        <p class=<?= $_SESSION['status'] ?>><?= $error ?></p>
<?php       }
        } else if (isset($_SESSION["success"])) {?>
        <p class=<?= $_SESSION['status'] ?>><?= $_SESSION["success"] ?></p>
<?php   }   unset($_SESSION["error_messages"]);
            unset($_SESSION["success"]); ?>
    </div>
    <div class="container">
        <form action="./process.php" method="POST">
            <h1>Excel to HTML</h1>
            <input type="hidden" name="action" value="upload">
            <input id="full_name" name="full_name" type="text" placeholder="Enter your full name.">
            <input type="file" name="csv" id="csv">
            <input type="submit" value="Upload" id="upload">
        </form>
        <h5>Uploaded Files:</h5>
<?php   foreach ($_SESSION['files'] as $file) {?>
        <form action="./process.php" method="POST">
            <input type="hidden" name="action" value="view">
            <p>✨ <?= $file['author'] ?> - <input class="file" type="submit" name="file" value=<?= $file['csv'] ?>></p>
        </form>
<?php   }?>
    </div>
</body>
</html>
