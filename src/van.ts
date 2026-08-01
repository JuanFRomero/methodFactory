import {Transport} from "./transport";

export class Van implements Transport {
    deliver(): string {
        return "entrega por carretera usando una Van";
    }
}