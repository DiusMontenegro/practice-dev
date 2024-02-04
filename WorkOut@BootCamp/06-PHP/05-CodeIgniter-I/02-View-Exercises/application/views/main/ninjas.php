<?php for ($i = 1; $i <= $this->session->userdata('num'); $i++) { ?>
    <img class="ninja" src="https://img.freepik.com/free-vector/cute-ninja-with-shuriken-sword-cartoon-vector-icon-illustration-people-holiday-isolated-flat_138676-9389.jpg" alt=<?= "Ninja {$i}" ?>>
<?php }?>
