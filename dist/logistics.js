"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logistics = void 0;
class Logistics {
    planDelivery(timeType) {
        const transport = this.createTransport();
        return `Planificando entrega de tipo ${timeType}: ${transport.deliver()}`;
    }
}
exports.Logistics = Logistics;
