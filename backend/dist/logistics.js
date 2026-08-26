"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logistics = void 0;
class Logistics {
    constructor(deliveryStrategy) {
        this.deliveryStrategy = deliveryStrategy;
    }
    setDeliveryStrategy(deliveryStrategy) {
        this.deliveryStrategy = deliveryStrategy;
    }
    planDelivery(transport = this.createTransport()) {
        return this.deliveryStrategy.execute(transport);
    }
}
exports.Logistics = Logistics;
