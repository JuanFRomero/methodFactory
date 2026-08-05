"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TruckLogistics = void 0;
const logistics_1 = require("./logistics");
const truck_1 = require("./truck");
class TruckLogistics extends logistics_1.Logistics {
    constructor(deliveryStrategy) {
        super(deliveryStrategy);
    }
    createTransport() {
        return new truck_1.Truck();
    }
}
exports.TruckLogistics = TruckLogistics;
