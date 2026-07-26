import { Transport } from "./transport";
import { TimeType } from "./types";

export abstract class Logistics {
    public abstract createTransport(): Transport;

    public planDelivery(timeType: TimeType): string {
        const transport = this.createTransport();

        return `Planificando entrega de tipo ${timeType}: ${transport.deliver()}`;
    }
}