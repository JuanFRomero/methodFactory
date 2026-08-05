import { Transport } from "../transport";


export abstract class TransportDecorator implements Transport{
    constructor(
        protected readonly transport: Transport
    ){}

    public abstract deliver(): string;
}