import { Transport } from "../transport";
import { TransportDecorator } from "./transport-decorator";

export class RefrigeratedTransportDecorator extends TransportDecorator {
    public deliver(): string {
        return `${this.transport.deliver()} tendrá refrigeración`;
    }
}