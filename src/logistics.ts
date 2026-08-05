import { Transport } from "./transport";
import { DeliveryStrategy } from "./steategy/delivery-strategy";

export abstract class Logistics {
    constructor(
        private deliveryStrategy: DeliveryStrategy
    ){}

    public abstract createTransport() : Transport;

    public setDeliveryStrategy( 
        deliveryStrategy: DeliveryStrategy 
    ): void {
        this.deliveryStrategy = deliveryStrategy;
    }

    public planDelivery( transport: Transport = this.createTransport() ): string {
        return this.deliveryStrategy.execute(transport)
    } 
}