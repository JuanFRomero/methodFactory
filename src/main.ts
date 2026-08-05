import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";

import { Transport } from "./transport";
import { Logistics } from "./logistics";
import { TruckLogistics } from "./truck-logistic";
import { BikeLogistic } from "./bike-logistic";
import { SeaLogistics } from "./sea-logistic";
import { VanLogistics } from "./van-logistic";
import { PlaneLogistics } from "./flight-logistic";
import { TransportFragileDecorator } from "./decorator/fragile-decorator";
import { TrackingTransportDecorator } from "./decorator/tracking-transport-decorator";
import { InsuredTransportDecorator } from "./decorator/Insured-transport-decorator";
import { RefrigeratedTransportDecorator } from "./decorator/refrigerated-transport-decorator";
import {
    DeliveryType,
    TransportType,
    TimeType
} from "./types";


function parseDeliveryType(value: string): DeliveryType {
    const normalizedValue = value.trim().toLowerCase();

    if (normalizedValue === "road") {
        return "road";
    }

    if (normalizedValue === "sea") {
        return "sea";
    }

    if (normalizedValue === "flight") {
        return "flight";
    }

    throw new Error(
        "Tipo de entrega no válido. Debes escribir 'road', 'sea' o 'flight'."
    );
}

function parseTransportType(value: string): TransportType {
    const normalizedValue = value.trim().toLowerCase();

    if (normalizedValue === "truck") {
        return "truck";
    }

    if (normalizedValue === "bike") {
        return "bike";
    }

    if (normalizedValue === "van") {
        return "van";
    }

    if (normalizedValue === "ship") {
        return "ship";
    }

    if (normalizedValue === "plane") {
        return "plane";
    }

    throw new Error(
        "Tipo de transporte no válido."
    );
}

function parseTimeType(value: string): TimeType {
    const normalizedValue = value.trim().toLowerCase();

    if (normalizedValue === "normal") {
        return "normal";
    }

    if (normalizedValue === "express") {
        return "express";
    }

    throw new Error(
        "Tipo de envío no válido. Debes escribir 'normal', 'express'."
    );
}

function parseFragileOption(value: string): boolean{
    const normalizeValue = value.trim().toLocaleLowerCase();
    
    if(normalizeValue == "yes" || 
        normalizeValue == "y"
    ){
        return true;
    }
    if( normalizeValue == "no" ||
        normalizeValue == "n" 
    ){
        return false;
    }

    throw new Error ("Opción no valida, debes escribir 'yes' o 'no'");
}

function parseInsuredOption(value: string): boolean{
    const normalizeValue = value.trim().toLocaleLowerCase();
    
    if(normalizeValue == "yes" || 
        normalizeValue == "y"
    ){
        return true;
    }
    if( normalizeValue == "no" ||
        normalizeValue == "n" 
    ){
        return false;
    }

    throw new Error ("Opción no valida, debes escribir 'yes' o 'no'");
}

function parseRefrigeratedOption(value: string): boolean{
    const normalizeValue = value.trim().toLocaleLowerCase();
    
    if(normalizeValue == "yes" || 
        normalizeValue == "y"
    ){
        return true;
    }
    if( normalizeValue == "no" ||
        normalizeValue == "n" 
    ){
        return false;
    }

    throw new Error ("Opción no valida, debes escribir 'yes' o 'no'");
}

function createLogistics(
    deliveryType: DeliveryType,
    transportType: TransportType
): Logistics {
    if (
        deliveryType === "road" &&
        transportType === "truck"
    ) {
        return new TruckLogistics();
    }

    if (
        deliveryType === "road" &&
        transportType === "bike"
    ) {
        return new BikeLogistic();
    }

    if (
        deliveryType === "road" &&
        transportType === "van"
    ) {
        return new VanLogistics();
    }

    if (
        deliveryType === "sea" &&
        transportType === "ship"
    ) {
        return new SeaLogistics();
    }

    if (
        deliveryType === "flight" &&
        transportType === "plane"
    ) {
        return new PlaneLogistics();
    }

    throw new Error(
        `Combinación no válida: entrega '${deliveryType}' con transporte '${transportType}'.`
    );
}

function clientCode(
    logistics: Logistics,
    timeType: TimeType,
    transport: Transport
): void {
    console.log(logistics.planDelivery(timeType, transport));
}

async function main(): Promise<void> {
    const readline = createInterface({
        input,
        output
    });

    try {
        const deliveryInput = await readline.question(
            "¿Qué tipo de entrega quieres usar? road/sea/flight: "
        );

        const transportInput = await readline.question(
            "¿Qué tipo de transporte quieres usar? truck/bike/van/ship/plane: "
        );

        const timeInput = await readline.question(
            "¿Qué tipo de envío necesitas? normal o express : "
        );

        const fragileInput = await readline.question(
            "La mercancía es frágil? y/n"
        );

        const InsuredInput = await readline.question(
            "El envío tendrá seguro? y/n"
        );

        const refrigeratedInput = await readline.question(
            "El envío necesita refrigeración? y/n"
        );

        const deliveryType = parseDeliveryType(deliveryInput);
        const transportType = parseTransportType(transportInput);
        const timeType = parseTimeType(timeInput);
        const isFragile = parseFragileOption(fragileInput);
        const isInsured = parseInsuredOption(InsuredInput);
        const isRefrigerated = parseRefrigeratedOption(refrigeratedInput)

        const logistics = createLogistics(
            deliveryType,
            transportType
        );

        let transport: Transport = logistics.createTransport();

        if(isFragile){
            transport = new TransportFragileDecorator(transport);
        }
        if(isInsured){
            transport = new InsuredTransportDecorator(transport);
        }

        if(isRefrigerated){
            transport = new RefrigeratedTransportDecorator(transport);
        }

        transport = new TrackingTransportDecorator(transport);

        clientCode(logistics, timeType, transport);
        
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        } else {
            console.error("Ha ocurrido un error desconocido.");
        }
    } finally {
        readline.close();
    }
}

void main();