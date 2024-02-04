<?php ?>
    <h1>User Name: <?= $about['name'] ?></h1>
    <h2>User Age: <?= $about['age'] ?>, Location: <?= $about['location'] ?></h2>
    <h3>5 Hobbies</h3>
    <ul>
<?php   foreach ($about['hobbies'] AS $hobby) {?>
        <li><?= $hobby ?></li>
<?php   }?>
    </ul>
