
import {Logistics} from "./logistics"; 
import {Transport} from "./transport";
import {Truck} from "./truck";
import { DeliveryStrategy } from "./steategy/delivery-strategy";

export class TruckLogistics extends Logistics {

    constructor(deliveryStrategy: DeliveryStrategy){
        super(deliveryStrategy)
    }

    public createTransport(): Transport {
        return new Truck();
    }
}
