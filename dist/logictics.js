"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logistics = void 0;
class Logistics {
    planDelivery() {
        const transport = this.createTransport();
        return `planificando entrega: ${transport.deliver()}`;
    }
}
exports.Logistics = Logistics;
