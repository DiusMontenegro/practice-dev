class World {
    constructor(num) {
        this.cities = [];

        for (let i = 0; i < num; i++) {
            this.cities[i] = new City();
        }
    }

    add_city(cityName) {
        this.cities.push(new City(cityName));
    }

    random_city() {
        return this.cities[Math.floor(Math.random() * this.cities.length)];
    }

    total_cities() {
        return this.cities.length;
    }
}

class City {
    constructor(name = "") {
        this.citizens = [];

        for (let i = 0; i < 51; i++) {
            this.citizens[i] = new Citizen();
        }

        if (!name) {
            name = "";

            for (let i = 0; i < 5; i++) {
                name += String.fromCharCode(Math.floor(Math.random() * 26) + 97); // Change from 65 to 97
            }
        }

        this.name = name;
    }

    add_citizen() {
        this.citizens.push(new Citizen());
    }
}

class Citizen {
    constructor() {
        this.age = Math.floor(Math.random() * 101);
    }
}

let world = new World(100);

//adds a new city called 'hackerhero'
world.add_city('hackerhero');

//should pull out a random city object within the world and log its value
console.log('Random city name: ', world.random_city().name);

//should pull out a random city object within the world and log its value
console.log('Age of first citizen in another random city: ',  world.random_city().citizens[0].age);

//should log 101 as there are 101  cities now
console.log('# of Cities: ', world.total_cities());
