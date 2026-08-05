"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeaLogistics = void 0;
const logistics_1 = require("./logistics");
const ship_1 = require("./ship");
class SeaLogistics extends logistics_1.Logistics {
    constructor(deliveryStrategy) {
        super(deliveryStrategy);
    }
    createTransport() {
        return new ship_1.Ship();
    }
}
exports.SeaLogistics = SeaLogistics;
