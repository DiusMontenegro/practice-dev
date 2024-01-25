<?php
$keyword = "softwareengineer";
$url = "https://www.bing.com/search?q=$keyword";
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 30);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);

$data = curl_exec($ch);
curl_close($ch);

$dom = new DOMDocument;
@$dom->loadHTML($data);

$results = $dom->getElementsByTagName('li');
$counter = 0;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>"Dako" nga damang ni Dius</title>
    <link rel="stylesheet" href="./main.css.php">
</head>
<body>
    <h1>Top 5 Results when searching '<?= $keyword ?>' on Bing</h1>
<?php
foreach ($results as $result) {
    if (strpos($result->getAttribute('class'), 'b_algo') !== false) {
        $counter++;
        $title = $result->getElementsByTagName('h2')->item(0)->nodeValue;
        $link = $result->getElementsByTagName('a')->item(0)->getAttribute('href');
?>
    <p><strong><?= $counter; ?>.</strong> <a href="<?= $link; ?>"><?= $title; ?></a></p><br>
<?php
        if ($counter === 5) {
            break;
        }
    }
}
?>
</body>
</html>
