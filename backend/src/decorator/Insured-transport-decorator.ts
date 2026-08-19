import { Transport } from "../transport";
import { TransportDecorator } from "./transport-decorator";

export class InsuredTransportDecorator extends TransportDecorator{
    public deliver(): string {
        return `${this.transport.deliver()} con seguro`;
    }
}