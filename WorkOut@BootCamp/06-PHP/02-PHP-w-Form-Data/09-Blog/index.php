<?php
    session_start();
    require("connection.php");
    if (!isset($_SESSION['log'])) {
        $_SESSION['first_name'] = 'Villager';
        $_SESSION['log'] = 'Log In';
        $_SESSION['visibility'] = 'hidden';
    }
    $allReviews = "SELECT * FROM reviews ORDER BY created_at DESC";
    $_SESSION['reviews'] = fetch_all($allReviews);
    $allReplies = "SELECT * FROM replies ORDER BY created_at DESC";
    $_SESSION['replies'] = fetch_all($allReplies);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog</title>
    <link rel="stylesheet" href="main.css.php">
</head>
<body>
    <header>
        <nav>
            <div class="container">
                <h1>Blog.</h1>
                <p>Welcome <?= $_SESSION['first_name']." !"?></p>
                <a href="./process.php"><?= $_SESSION['log'] ?></a>
            </div>
        </nav>
    </header>
    <main>
        <div class="container">
            <div class="content">
                <h1>CONFIDENCE IS AN EXPRESSION OF POWER</h1>
                <p>The standard 6.2L 420-hp tooltip† V8 is paired with an intelligent 10-speed automatic transmission that moves among gears in a smooth, efficient fashion. Engine technologies such as Continuously Variable Valve Timing, Direct Injection and Dynamic Fuel Management also help ensure this power plant's 460 lb-ft of torque tooltip† (623 Nm) is harnessed efficiently.</p>
            </div>
            <img src="./img/escalade-white.png" alt="escalade">
            <img src="./img/escalade-red-front.png" alt="escalade">
            <div class="content">
                <h1>DURAMAX 3.0L TURBO DIESEL 8-CYLINDER ENGINE</h1>
                <p>The available Duramax 3.0L Turbo Diesel 6-cylinder engine paired with a 10-speed automatic transmission helps deliver immediate power performance at a moment's notice. Available Magnetic Ride Control reads the road 1,000 times per second to make your drive responsive and smooth—that means the vehicle is reading every inch of the road at 60 mph.</p>
            </div>
            <form id="review" action="./process.php" method="POST" <?= $_SESSION['visibility'] ?>>
                <h2>Post a Review</h2>
                <textarea id='review-input' name="review" ></textarea>
                <input id="review-btn" name="action" type="submit" value='review'>
            </form>
            <div id="comments">
                <h1>Reviews</h1>
<?php   foreach ($_SESSION['reviews'] AS $review) {
                $_SESSION['review_id'] = $review['id'];
?>
                <div class="comment" >
                    <h4>🌟 <?= $review['full_name'] ?>   ( <?= $review['created_at'] ?> )</h4>
                    <p class='details'><?= $review['context'] ?></p>
                    <div class='replies' >
<?php                   foreach($_SESSION['replies'] AS $reply) {
                            if ($review['id'] === $reply['review_id']) {
?>
                        <h5><?= $reply['full_name']?> - <?= $reply['created_at']?></h5>
                        <p class='reply'><?= $reply['content']?></p>
<?php                       }
                        }?>
                        <form class="reply-form" action="./process.php" method="POST" <?= $_SESSION['visibility'] ?>>
                            <input type="hidden" name='reviewId' value=<?=$review['id']?> >
                            <textarea name="reply"></textarea>
                            <input class="reply-btn" name="action" type="submit" value="reply">
                        </form>
                    </div>
                </div>
<?php   }   ?>
                </div>
            </div>
        </div>
    </main>
</body>
</html>
