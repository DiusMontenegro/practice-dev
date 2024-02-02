<?php
class HTML_Generator {
    public function render_input($array)
    {
        foreach ($array AS $rows)
        {
            echo "<div>";
                foreach ($rows AS $key => $value)
                {
                    $label = ucfirst($key);
                    echo "<label for='{$value}'>{$label}</label>";
                    echo "<input id='{$value}' name='{$value}' type='text' value='{$value}'>";
                }
            echo "</div><br>";
        }
    }

    public function render_lists($array, $list_type)
    {
        if ($list_type === "unordered") {
            echo "<ul>";
                foreach ($array AS $items)
                {
                    echo "<li>{$items}</li>";
                }
            echo "</ul><br>";
        } else if ($list_type === "ordered") {
            echo "<ol>";
                foreach ($array AS $items)
                {
                    echo "<li>{$items}</li>";
                }
            echo "</ol><br>";
        }
    }
}

$data = array(
    array("name" => "Bag", "price" => "250", "stocks" => "10"),
    array("name" => "Shoes", "price"=> "129", "stocks" => "15")
);
$data2 = array("Apple", "Banana", "Cherry");

$generate = new HTML_Generator();
$generate->render_input($data);
$generate->render_lists($data2, "unordered");
$generate->render_lists($data2, "ordered");
