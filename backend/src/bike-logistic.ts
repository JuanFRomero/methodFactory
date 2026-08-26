import { Logistics } from "./logistics";
import { Transport } from "./transport";
import { Bike } from "./bike";
import { DeliveryStrategy } from "./steategy/delivery-strategy";

export class BikeLogistic extends Logistics {

    constructor( deliveryStrategy : DeliveryStrategy ){
        super( deliveryStrategy )
    }
    
    public createTransport(): Transport {
        return new Bike();
    }
}