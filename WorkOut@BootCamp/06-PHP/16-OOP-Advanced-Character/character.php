<?php
    class Character
    {
        public $name, $health = 100, $stamina = 100, $manna = 100;

        public function __construct($name)
        {
            $this->name = $name;
        }

        public function walk()
        {
            $this->stamina -= 1;
            return $this;
        }

        public function run()
        {
            $this->stamina -= 3;
            return $this;
        }

        public function showStats()
        {
            echo "Stats - Name: $this->name, HP: $this->health, Stamina: $this->stamina, Manna: $this->manna <br>";
            return $this;
        }
    }

    $character = new Character('Rudeus');
    $character->walk()->walk()->walk()->run()->run()->showStats();

    class Shaman extends Character
    {
        public function __construct($name)
        {
            $this->name = $name;
            $this->health = 150;
        }

        public function heal()
        {
            $this->health += 5;
            $this->stamina += 5;
            $this->manna += 5;
            return $this;
        }
    }

    $character2 = new Shaman("Roxy");
    $character2->walk()->walk()->walk()->run()->run()->heal()->showStats();

    class Swordsman extends Character
    {
        public function __construct($name)
        {
            $this->name = $name;
            $this->health = 170;
        }

        public function slash()
        {
            $this->manna -= 10;
            return $this;
        }

        public function showStats()
        {
            echo "I am powerful!!!   ";
            echo "Stats - Name: $this->name, HP: $this->health, Stamina: $this->stamina, Manna: $this->manna <br>";
            return $this;
        }
    }

    $character3 = new Swordsman('Eris');
    $character3->walk()->walk()->walk()->run()->run()->slash()->slash()->showStats();

    // Now for the first instance of Character (instance called 'character '), try calling a method 'heal' or 'slash' and make sure it doesn't work. :)

    // $character->heal()->slash()->showStats(); // <--- this doesn't work, uncomment to test it.
