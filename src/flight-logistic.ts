import { Logistics } from "./logistics";
import { Transport } from "./transport";
import { Plane } from "./plane";

export class PlaneLogistics extends Logistics{
    public createTransport(): Transport {
        return new Plane();
    }
}