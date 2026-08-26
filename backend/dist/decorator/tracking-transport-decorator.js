"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackingTransportDecorator = void 0;
const transport_decorator_1 = require("./transport-decorator");
class TrackingTransportDecorator extends transport_decorator_1.TransportDecorator {
    deliver() {
        return (`${this.transport.deliver()}` + "seguimiento con gps");
    }
}
exports.TrackingTransportDecorator = TrackingTransportDecorator;
