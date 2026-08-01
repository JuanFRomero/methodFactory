import { Logistics } from "./logistics";
import { Transport } from "./transport";
import { Van } from "./van";

export class VanLogistics extends Logistics {
    public createTransport(): Transport {
        return new Van();
    }
}