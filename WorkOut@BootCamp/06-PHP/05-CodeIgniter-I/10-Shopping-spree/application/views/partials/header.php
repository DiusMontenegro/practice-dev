<?php defined('BASEPATH') OR exit('No direct script access allowed');?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title><?= $default['title'] ?></title>
    <link rel="stylesheet" href=<?= base_url('assets/styles/styles.css');?>>
</head>
<body>
    <nav>
        <div class="container">
            <h1><a href=<?= base_url() ?>>Thrift Shop</a></h1>
            <a href=<?= $default['link'] ?>><?= $default['nav'] ?></a>
        </div>
    </nav>
