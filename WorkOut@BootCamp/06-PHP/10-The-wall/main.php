<?php
    session_start();
    require("connection.php");
    $allPosts = "SELECT * FROM posts ORDER BY created_at DESC";
    $_SESSION['posts'] = fetch_all($allPosts);
    $allReplies = "SELECT * FROM replies ORDER BY created_at";
    $_SESSION['replies'] = fetch_all($allReplies);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Wall</title>
    <link rel="stylesheet" href="./main.css.php">
</head>
<body class="main-body">
    <main class="main-wall">
        <nav>
            <h3>The Wall.</h3>
            <a href="./process.php">Log Out</a>
        </nav>
        <aside class="profile">
            <img src="./img/profile.png" alt="profile">
            <p><?=$_SESSION['full_name']?> 🟢</p>
            <blockquote>" The only secure computer is one that's unplugged, locked in a safe, and buried 20 feet under the ground in a secret location... and I'm not even too sure about that one. Cybersecurity demands constant vigilance and cautious trust." <span>- Dennis Huges</span></blockquote>
            <form action="./process.php" method="POST">
                <input type="hidden" name="action" value="post">
                <textarea name="post"></textarea>
                <input id="post" type="submit" value="Post">
            </form>
        </aside>
        <aside class="wall">
<?php   foreach ($_SESSION['posts'] AS $post) {?>
            <div class="post">
                <div class="content">
                <h1>✨ <?= $post['full_name'] ?> - <?= $post['created_at'] ?></h1>
                <p><?= $post['post'] ?></p>
                </div>
<?php       foreach ($_SESSION['replies'] AS $reply) {
                if ($reply['post_id'] === $post['id']) {
?>
                <div class="replies">
                    <h4>🌠 <?= $reply['full_name'] ?> - <?= $reply['created_at'] ?></h4>
                    <p><?= $reply['reply'] ?></p>
                </div>
<?php           }
            }?>
                <form class="reply" action="./process.php" method="POST">
                    <input type="hidden" name="action" value="reply">
                    <input type="hidden" name='postId' value=<?= $post['id'] ?>>
                    <textarea name="reply"></textarea>
                    <input type="submit" name="submit-reply" class="reply-btn" value="Reply">
                </form>
            </div>
<?php   }?>
        </aside>
    </main>
</body>
</html>
