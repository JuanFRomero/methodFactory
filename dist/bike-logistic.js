"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeLogistic = void 0;
const logistics_1 = require("./logistics");
const bike_1 = require("./bike");
class BikeLogistic extends logistics_1.Logistics {
    constructor(deliveryStrategy) {
        super(deliveryStrategy);
    }
    createTransport() {
        return new bike_1.Bike();
    }
}
exports.BikeLogistic = BikeLogistic;
