<?php
    function generate_ticket_image($ticket_number) {
        $img_width = 300;
        $img_height = 350;
        $my_img = imagecreate($img_width, $img_height);
        $background = imagecolorallocate($my_img, rand(0, 255), rand(0, 255), rand(0, 255));
        $text_colour = imagecolorallocate($my_img, 0, 0, 0);
        $font = "./fonts/roboto/Roboto-regular.ttf";
        //bg
        imagefilledrectangle($my_img, 0, 0, $img_width, $img_height, $background);
        //text
        imagettftext($my_img, 20, 0, 90, 150, $text_colour, $font, "Ticket: $ticket_number");
        imagettftext($my_img, 20, 0, 90, 190, $text_colour, $font, "Hello V88!");

        header("Content-type: image/png");
        imagepng($my_img);
        imagedestroy($my_img);
    }
    generate_ticket_image(rand(0, 5));
?>
