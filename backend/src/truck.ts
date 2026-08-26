import {Transport} from "./transport";

export class Truck implements Transport {
    deliver(): string {
        return "entrega por carretera usando camión";
    }
}