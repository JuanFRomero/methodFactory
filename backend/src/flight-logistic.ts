import { Logistics } from "./logistics";
import { Transport } from "./transport";
import { Plane } from "./plane";
import { DeliveryStrategy } from "./steategy/delivery-strategy";

export class PlaneLogistics extends Logistics{

    constructor( deliveryStrategy : DeliveryStrategy ){
        super(deliveryStrategy)
    }

    public createTransport(): Transport {
        return new Plane();
    }
}