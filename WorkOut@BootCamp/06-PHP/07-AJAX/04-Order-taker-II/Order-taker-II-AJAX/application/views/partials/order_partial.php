<?php   foreach ($orders AS $order) {?>
            <div class="card">
                <form class="delete_order" action=<?= base_url('orders/delete_order/'.$order['id']) ?> method="POST">
                    <input class="delete" type="submit" value="X">
                </form>
                <h2><?= $order['id'] ?></h2>
                <form class="update_order" action=<?= base_url("orders/update_order/{$order['id']}") ?> class="description" method="POST">
                    <p><?= $order['customer_order'] ?></p>
                </form>
            </div>
<?php   }?>
