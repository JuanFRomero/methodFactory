import { Transport } from "../transport";
import { TransportDecorator } from "./transport-decorator";

export class TrackingTransportDecorator extends TransportDecorator {
    public deliver(): string {
        return(`${this.transport.deliver()}`+ "seguimiento con gps");
    }
}