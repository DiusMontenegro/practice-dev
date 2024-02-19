<?php defined('BASEPATH') OR exit('No direct script access allowed');?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $title ?></title>
    <link href="<?= base_url('assets/styles/template.css');?>" rel="stylesheet">
    <link href="<?= base_url('assets/styles/'.$style);?>" rel="stylesheet">
</head>
<body>
    <nav>
        <div class="nav container">
            <div class="main_links">
                <a id="brand" target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">V88 Merchandise</a>
<?php       if (isset($nav_links)) {
            foreach ($nav_links as $nav_link) { ?>
                <a class="utilities" href=<?= base_url($nav_link['link']) ?>><?= $nav_link['name'] ?></a>
<?php       }}?>
            </div>
            <div class="side_link">
                <a id="nav-link" href=<?= base_url($link_path)?>><?= $link ?></a>
            </div>
        </div>
    </nav>
