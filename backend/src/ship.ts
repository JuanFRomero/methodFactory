import { Transport } from "./transport";

export class Ship implements Transport{
    deliver(): string {
        return "Entrega por mar usando barco."
    }
}