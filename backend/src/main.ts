import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";

import { Transport } from "./transport";
import { Logistics } from "./logistics";
import { createLogistics, createDeliveryStrategy } from "./delivery-factory";
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

function parseYesOrNotOption( value: string, optionName: string ): boolean{
    const normalizedValue = value.trim().toLocaleLowerCase();

    if(normalizedValue == "yes" || 
        normalizedValue == "y"
    ){
        return true;
    }
    if( normalizedValue == "no" ||
        normalizedValue == "n" 
    ){
        return false;
    }

    throw new Error ("Opción no valida, debes escribir 'yes' o 'no'");
}

function clientCode(
    logistics: Logistics,
    transport: Transport
): void {
    console.log(logistics.planDelivery( transport));
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
        const isFragile = parseYesOrNotOption(fragileInput , "mercancia fragil");
        const isInsured = parseYesOrNotOption(InsuredInput, "mercancia asegurada");
        const isRefrigerated = parseYesOrNotOption(refrigeratedInput, "mercancia refrigerada");
        const deliveryStrategy = createDeliveryStrategy(timeType);

        const logistics = createLogistics(
            deliveryType,
            transportType,
            deliveryStrategy
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

        clientCode(logistics, transport);
        
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
