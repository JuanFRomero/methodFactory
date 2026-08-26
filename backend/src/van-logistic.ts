import { Logistics } from "./logistics";
import { Transport } from "./transport";
import { Van } from "./van";
import { DeliveryStrategy } from "./steategy/delivery-strategy";

export class VanLogistics extends Logistics {
    
    constructor( deliveryStrategy : DeliveryStrategy ){
        super(deliveryStrategy)
    }
    
    public createTransport(): Transport {
        return new Van();
    }
}