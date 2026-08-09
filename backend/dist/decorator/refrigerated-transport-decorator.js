"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefrigeratedTransportDecorator = void 0;
const transport_decorator_1 = require("./transport-decorator");
class RefrigeratedTransportDecorator extends transport_decorator_1.TransportDecorator {
    deliver() {
        return `${this.transport.deliver}` + "tendrá refrigeración";
    }
}
exports.RefrigeratedTransportDecorator = RefrigeratedTransportDecorator;
