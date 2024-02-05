<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Process</title>
    <link rel="stylesheet" href="./main.css.php">
</head>
<body>
    <div class="container">
        <h1>Submitted Entry</h1>
        <div class="values">
            <div>
                <h4>Your Name (optional):</h4>
                <h4>Course Title:</h4>
                <h4>Given Score (1-10):</h4>
            </div>
            <div>
                <h4><?= $_POST['first_name']?></h4>
                <h4><?= $_POST['course']?></h4>
                <h4><?= $_POST['score']?></h4>
            </div>
        </div>
        <p>Reason:</p>
        <p id="description"><?= $_POST['feedback']?></p>
        <a href="./feedback-form.php">Return</a>
    </div>
</body>
</html>