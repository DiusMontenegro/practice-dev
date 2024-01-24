<?php
$users = array( 
    array("cardholder_name"=> "Michael Choi", 'cvc' => 123, 'acc_num' => '1234 5678 9876 5432'),
    array("cardholder_name"=> "John Supsupin",'cvc' => 789, 'acc_num' => '0001 1200 1500 1510'),
    array("cardholder_name"=> "KB Tonel", 'cvc' => 567, 'acc_num' => '4568 456 123 5214'),
    array("cardholder_name"=> "Mark Guillen", 'cvc' => 345, 'acc_num' => '123 123 123 123'), 
    array("cardholder_name"=> "Dius Montenegro", 'cvc' => 619, 'acc_num' => '6966 6966 1243 6969'), 
    array("cardholder_name"=> "Kalderetang Putotoy", 'cvc' => 345, 'acc_num' => '1623 1243 1423 1243'), 
    array("cardholder_name"=> "Pritong Mani", 'cvc' => 345, 'acc_num' => '875 1234 6575 1423'), 
    array("cardholder_name"=> "Cardo Tulisay", 'cvc' => 355, 'acc_num' => '1823 1253 1243 1283'), 
    array("cardholder_name"=> "Mark Susay", 'cvc' => 254, 'acc_num' => '123 123 123 123') 
);

function get_length($arr) {
    $total = '';
    foreach ($arr as $user) {
        $total .= "{$user['acc_num']}{$user['cvc']}";
    }
    return $total;
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Credit Card</title>
    <link rel="stylesheet" href="./styles.css">
</head>
<body>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Name in uppercase</th>
                <th>Account Num</th>
                <th>CVC Num</th>
                <th>Full Account</th>
                <th>Length of full account</th>
                <th>Is valid</th>
            </tr>
        </thead>
        <tbody>
<?php
        for ($i = 0; $i < count($users); $i++) {
            $full_acn = str_replace(" ", '', "{$users[$i]["acc_num"]}{$users[$i]["cvc"]}");
            $result = (strlen($full_acn) < 19) ? "No" : "Yes";
            $selected = ($i === 2) ? 'bg-gray': 'bg-none';
?>
            <tr class=<?=$selected?>>
                <td><?= $i + 1 ?></td>
                <td><?= $users[$i]["cardholder_name"] ?></td>
                <td><?= strtoupper($users[$i]["cardholder_name"]) ?></td>
                <td><?= $users[$i]["acc_num"] ?></td>
                <td><?= $users[$i]["cvc"] ?></td>
                <td><?= "{$users[$i]["acc_num"]} {$users[$i]["cvc"]}" ?></td>
                <td><?= strlen($full_acn) ?></td>
                <td><?= $result ?></td>
            </tr>
<?php } ?>
        </tbody>
    </table>
</body>
</html>