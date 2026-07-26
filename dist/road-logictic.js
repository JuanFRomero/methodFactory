"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoadLogistics = void 0;
const logictics_1 = require("./logictics");
const truck_1 = require("./truck");
class RoadLogistics extends logictics_1.Logistics {
    createTransport() {
        return new truck_1.Truck();
    }
}
exports.RoadLogistics = RoadLogistics;
