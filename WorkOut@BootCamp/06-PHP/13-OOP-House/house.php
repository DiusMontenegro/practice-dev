<?php
    class House {
        public $location, $price, $lot, $type, $discount, $total_price;
        public function __construct($location, $price, $lot, $type) {
            $this->location = $location;
            $this->price = $price;
            $this->lot = $lot;
            $this->type = $type;
            $this->discount = 0.05;
            $discountAmount = $this->price * $this->discount;
            $this->total_price = $this->price - $discountAmount;

            if ($this->type === "Pre-selling") {
                $this->discount = 0.2;
            }

            $this->show_all();
        }

        public function show_all() {
            echo "Location: $this->location <br>";
            echo "Price: $this->price <br>";
            echo "Lot: $this->lot<br>";
            echo "Type: $this->type<br>";
            echo "Discount: $this->discount<br>";
            echo "Total Price: $this->total_price<br><br>";
        }
    }

    $house1 = new House("Kidapawan City", 300000, "250 sqm.", "Pre-selling");
    $house2 = new House("Davao City", 800000, "300 sqm.", "Pre-selling");
    $house3 = new House("Digos City", 600000, "200 sqm.", "House and lot");
    $house4 = new House("Sta. Cruz", 200000, "150 sqm.", "Pre-selling");
    $house5 = new House("Toril", 400000, "400 sqm.", "Balay lang way labot gamit");
