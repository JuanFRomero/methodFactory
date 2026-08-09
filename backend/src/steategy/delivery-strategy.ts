import { Transport } from "../transport";

export interface DeliveryStrategy {
    execute(transport: Transport  ) : string;
}