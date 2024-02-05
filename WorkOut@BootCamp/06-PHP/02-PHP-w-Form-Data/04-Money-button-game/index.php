<?php
    session_start();
    $risks = array (
        array("type" => "Low", "amount" => 25, "reward" => 100),
        array("type" => "Moderate", "amount" => 100, "reward" => 1000),
        array("type" => "High", "amount" => 500, "reward" => 2500),
        array("type" => "Severe", "amount" => 3000, "reward" => 5000)
    );
    if (!isset($_SESSION['start_money'])) {
        $_SESSION['start_money'] = 500;
        $_SESSION['risks'] = array (
            'low' => 25,
            'moderate' => 100,
            'high' => 500,
            'severe' => 3000
        );
    };
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Money Button Game</title>
    <link rel="stylesheet" href="./main.css.php">
</head>
<body>
    <!-- header -->
    <form class="container" action="./process.php" method="POST">
        <h1>Your Money: <?= $_SESSION['start_money'] ?></h1>
        <div class="reset-container">
            <input name="reset" id="reset" type="submit" value="Reset Game">
        </div>
    </form>
    <!-- section -->
    <section class="container">
<?php   foreach ($risks as $risk) { ?>
        <form class="money-form" method="POST" action="./process.php">
            <h2><?= $risk['type']?> Risk</h2>
            <button id=<?= $risk['type']?> class="bet" name=<?= $risk['type']?> value=<?= $risk['amount']?> type="submit">Bet</button>
            <p>by -<?= $risk['amount']?> up to <?= $risk['reward']?></p>
        </form>
<?php   } ?>
        <h3>Game Host:</h3>
        <div id="status">
<?php   if (isset($_SESSION['status'])) { 
        $output = implode(" ", $_SESSION['message']);    
?>
            <?= $output?>   
<?php   } ?>
        </div>
    </section>
</body>
</html>
