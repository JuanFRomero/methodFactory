
import {Logistics} from "./logistics"; 
import {Transport} from "./transport";
import {Truck} from "./truck";

export class TruckLogistics extends Logistics {
    public createTransport(): Transport {
        return new Truck();
    }
}
