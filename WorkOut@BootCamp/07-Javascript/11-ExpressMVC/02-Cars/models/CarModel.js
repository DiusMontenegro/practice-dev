class CarModel {
    constructor(connection) {
        this.connection = connection;
    }

    getAllCars() {
        return new Promise((resolve, reject) => {
            this.connection.query('SELECT * FROM cars', (err, cars) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(cars);
                }
            });
        });
    }
}

module.exports = CarModel;
