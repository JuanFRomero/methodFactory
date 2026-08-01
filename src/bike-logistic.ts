import { Logistics } from "./logistics";
import { Transport } from "./transport";
import { Bike } from "./bike";

export class BikeLogistic extends Logistics {
    public createTransport(): Transport {
        return new Bike();
    }
}