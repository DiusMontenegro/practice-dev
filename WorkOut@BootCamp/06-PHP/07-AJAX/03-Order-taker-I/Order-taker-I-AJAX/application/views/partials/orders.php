<?php       foreach ($orders AS $order) { ?>
                <div class="card">
                    <h2><?= $order['id'] ?></h2>
                    <p class="order"><?= $order['customer_order'] ?></p>
                </div>
<?php       }?>
