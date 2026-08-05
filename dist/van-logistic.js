"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VanLogistics = void 0;
const logistics_1 = require("./logistics");
const van_1 = require("./van");
class VanLogistics extends logistics_1.Logistics {
    constructor(deliveryStrategy) {
        super(deliveryStrategy);
    }
    createTransport() {
        return new van_1.Van();
    }
}
exports.VanLogistics = VanLogistics;
