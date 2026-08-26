"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressDeliveryStrategy = void 0;
class ExpressDeliveryStrategy {
    execute(transport) {
        return `El delivery ${transport.deliver()} se entregara en un lapso de 24 a 48 horas.`;
    }
}
exports.ExpressDeliveryStrategy = ExpressDeliveryStrategy;
