<?php
        if ($products) {
            foreach ($products AS $product) {?>
                <tr>
                    <td><?= $product['name'] ?></td>
                    <td><?= $product['inventory'] ?></td>
                    <td>$<?= $product['price'] ?></td>
                    <td><?= $product['created_at'] ?></td>
                </tr>
<?php       }}?>
