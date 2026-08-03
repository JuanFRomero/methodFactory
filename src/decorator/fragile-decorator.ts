import { Transport } from "../transport";
import { TransportDecorator } from "./transport-decorator";

export class TransportFragileDecorator extends TransportDecorator {
    constructor( transport: Transport ){
        super(transport)
    }

    public deliver(): string {
        return `${this.transport.deliver()}` + "manipulación especial, moviliza mercancia frágil"
    }
}