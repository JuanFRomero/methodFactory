import {Logistics} from "./logistics";
import {Transport} from "./transport";
import {Ship} from "./ship";
import { DeliveryStrategy } from "./steategy/delivery-strategy";

export class SeaLogistics extends Logistics{

    constructor( deliveryStrategy : DeliveryStrategy ){
        super(deliveryStrategy)
    }

    public createTransport(): Transport {
        return new Ship();
    }
}