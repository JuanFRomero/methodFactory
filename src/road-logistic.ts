
import {Logistics} from "./logistics"; 
import {Transport} from "./transport";
import {Truck} from "./truck";

export class RoadLogistics extends Logistics {
    public createTransport(): Transport {
        return new Truck();
    }
}
