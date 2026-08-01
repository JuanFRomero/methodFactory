import {Transport} from "./transport";

export class Bike implements Transport {
    deliver(): string {
        return "entrega por carretera usando moto";
    }
}