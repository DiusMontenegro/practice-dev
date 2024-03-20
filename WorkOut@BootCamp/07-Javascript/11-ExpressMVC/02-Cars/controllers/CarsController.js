const CarModel = require('../models/CarModel');

class CarsController {
    constructor(connection) {
        this.carModel = new CarModel(connection);
        this.count = 1;
    }

    async index(req, res) {
        try {
            const cars = await this.carModel.getAllCars();
            if (!req.session.count) {
                req.session.count = this.count;
            } else {
                if (!req.session.repeatClicked) {
                    req.session.count++;
                }
            }
            res.render('index', { cars, count: req.session.count });
        } catch (err) {
            console.error('Error fetching cars:', err);
            res.status(500).send('Internal Server Error');
        }
    }
}

module.exports = CarsController;
