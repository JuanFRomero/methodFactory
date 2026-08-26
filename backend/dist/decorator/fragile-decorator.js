"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransportFragileDecorator = void 0;
const transport_decorator_1 = require("./transport-decorator");
class TransportFragileDecorator extends transport_decorator_1.TransportDecorator {
    constructor(transport) {
        super(transport);
    }
    deliver() {
        return `${this.transport.deliver()} con manipulación especial, moviliza mercancia frágil`;
    }
}
exports.TransportFragileDecorator = TransportFragileDecorator;
