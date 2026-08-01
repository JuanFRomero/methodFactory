import { Transport } from "./transport";

export class Plane implements Transport {
    deliver(): string {
        return "flete de envio por aire.";
    }
}