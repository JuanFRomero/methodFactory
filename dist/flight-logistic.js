"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaneLogistics = void 0;
const logistics_1 = require("./logistics");
const plane_1 = require("./plane");
class PlaneLogistics extends logistics_1.Logistics {
    createTransport() {
        return new plane_1.Plane();
    }
}
exports.PlaneLogistics = PlaneLogistics;
