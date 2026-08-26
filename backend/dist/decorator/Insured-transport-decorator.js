"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsuredTransportDecorator = void 0;
const transport_decorator_1 = require("./transport-decorator");
class InsuredTransportDecorator extends transport_decorator_1.TransportDecorator {
    deliver() {
        return `${this.transport.deliver()} con seguro`;
    }
}
exports.InsuredTransportDecorator = InsuredTransportDecorator;
