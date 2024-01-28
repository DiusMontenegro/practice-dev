<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Raffle Entries</title>
    <link rel="stylesheet" href="main.css.php">
</head>
<body id="entry-page">
<?php   if (isset($_SESSION['success'])) {?>
    <h4><?= $_SESSION['success'] ?></h4>
<?php   }?>
    <h2>Raffle Entries</h2>
    <form id="entry-form" action="./process.php" method='POST'>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Contact Number</th>
                    <th>Date of entry</th>
                </tr>
            </thead>
            <tbody>
<?php   foreach ($_SESSION['entries'] as $entry) { ?>
                <tr>
                    <td><?= $entry['first_name']." ".$entry['last_name'] ?></td>
                    <td><?= $entry['contact_number'] ?></td>
                    <td><?= $entry['created_at'] ?></td>
                    <td>
                        <button type='submit' name="delete" value=<?=$entry['contact_number']?>>
                            <img src="./img/delete.png" alt="delete">
                        </button>
                    </td>
                </tr>
<?php   }?> </tbody>
        </table>
        <input id="back" name="back" type="submit" value="Back">
    </form>
</body>
</html>
