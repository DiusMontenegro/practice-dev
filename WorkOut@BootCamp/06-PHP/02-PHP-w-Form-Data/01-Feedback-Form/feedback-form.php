<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Feedback Form</title>
    <link rel="stylesheet" href="./main.css.php">
</head>
<body>
    <form action="./process.php" method="POST">
        <h1>Feedback Form</h1>
        <label for="first_name">Your Name (optional):</label>
        <input type="text" id='first_name' name="first_name">
        <label for="course">Course Title:</label>
        <select name="course" id="course">
            <option value="PHP Track">PHP Track</option>
            <option value="Javascript Track">JavaScript Track</option>
            <option value="Web Fundamentals Track">Web Fundamentals Track</option>
        </select>
        <label for="score">Given Score (1-10):</label>
        <select name="score" id="score">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10" selected>10</option>
        </select>
        <label for="feedback">Reason:</label>
        <textarea name="feedback" id="feedback"></textarea>
        <input id="submit" type="submit" value="submit">
    </form>
</body>
</html>