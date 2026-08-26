import { Transport } from "../transport";
import { DeliveryStrategy } from "./delivery-strategy";

export class NormalDeliveryStrategy implements DeliveryStrategy{
    public execute(transport: Transport): string {
        return `Entrega normal: ${transport.deliver()} tiempo estimado de 3 a  5 días.`
    }
}