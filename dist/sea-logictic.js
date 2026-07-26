"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeaLogistics = void 0;
const logictics_1 = require("./logictics");
const ship_1 = require("./ship");
class SeaLogistics extends logictics_1.Logistics {
    createTransport() {
        return new ship_1.Ship();
    }
}
exports.SeaLogistics = SeaLogistics;
