"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NormalDeliveryStrategy = void 0;
class NormalDeliveryStrategy {
    execute(transport) {
        return `Entrega normal: ${transport.deliver()}` + "tiempo estimado de 3 a  5 días.";
    }
}
exports.NormalDeliveryStrategy = NormalDeliveryStrategy;
