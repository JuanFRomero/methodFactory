import { Transport } from "../transport";
import { DeliveryStrategy } from "./delivery-strategy";

export class ExpressDeliveryStrategy implements DeliveryStrategy{
    public execute(transport: Transport): string {
        return `El delivery ${transport.deliver()}` + "se entregara en un lapso de 24 a 48 horas."
    }
}