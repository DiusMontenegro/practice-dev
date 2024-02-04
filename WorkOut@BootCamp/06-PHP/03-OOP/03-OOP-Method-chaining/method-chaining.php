<?php
class Item {
        public $name, $price, $stock, $sold;

        public function __construct($name, $price, $stock)
        {
            $this->name = $name;
            $this->price = $price;
            $this->stock = $stock;
            $this->sold = 0;
        }

        public function logDetails()
        {
            echo "LogDetails: Product $this->name, Price $this->price, Available Stocks: $this->stock, Sold $this->sold. <br><br>";
            return $this;
        }

        public function buy()
        {
            if ($this->stock <= 0) {
                // $this->sold = 0;
                $this->stock = 0;
                echo "You cannot buy Out of stock items. Stocks available: $this->stock. <br>";
            } else {
                $this->sold += 1;
                $this->stock -= 1;
                echo "Buying $this->name,  Available Stocks: $this->stock <br>";
            }
            return $this;
        }

        public function return()
        {
            $this->stock += 1;

            if ($this->sold <= 0) {
                $this->sold = 0;
            } else {
                $this->sold -= 1;
            }

            echo "Returning $this->name. Available Stocks: $this->stock. Total sold: $this->sold piece/s. <br>";
            return $this;
        }
    }

    $mobilePhone = new Item('Iphone15 Pro-Max', 'P90,000', 3);
    $mobilePhone->logDetails()->buy()->buy()->buy()->return()->logDetails();

    $laptop = new Item("Acer Predator NEO", "P200,000", 2);
    $laptop->logDetails()->buy()->buy()->return()->return()->logDetails();

    $videoCards = new Item("Nvidia RTX-4090 OC", "P120,000", 3);
    $videoCards->logDetails()->return()->return()->return()->logDetails();

    // What would you do to prevent the instance from having negative sold, and buying out-of-stock?
    // Answer: add an if-else statement in the buy() function.
    // test:
    $processors = new Item("Intel i9-13900KS", "P33,995.00", 0);
    $processors->logDetails()->buy()->buy()->buy()->logDetails();
