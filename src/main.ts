import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";

import { Logistics } from "./logistics";
import { TruckLogistics } from "./truck-logistic";
import { BikeLogistic } from "./bike-logistic";
import { SeaLogistics } from "./sea-logistic";
import { VanLogistics } from "./van-logistic";
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

    throw new Error(
        "Tipo de entrega no válido. Debes escribir 'road' o 'sea'."
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

    if (normalizedValue === "fragile") {
        return "fragile";
    }

    throw new Error(
        "Tipo de envío no válido. Debes escribir 'normal', 'express' o 'fragile'."
    );
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

    throw new Error(
        `Combinación no válida: entrega '${deliveryType}' con transporte '${transportType}'.`
    );
}

function clientCode(
    logistics: Logistics,
    timeType: TimeType
): void {
    console.log(logistics.planDelivery(timeType));
}

async function main(): Promise<void> {
    const readline = createInterface({
        input,
        output
    });

    try {
        const deliveryInput = await readline.question(
            "¿Qué tipo de entrega quieres usar? road/sea: "
        );

        const transportInput = await readline.question(
            "¿Qué tipo de transporte quieres usar? truck/ship: "
        );

        const timeInput = await readline.question(
            "¿Qué tipo de envío necesitas? normal/express/fragile: "
        );

        const deliveryType = parseDeliveryType(deliveryInput);
        const transportType = parseTransportType(transportInput);
        const timeType = parseTimeType(timeInput);

        const logistics = createLogistics(
            deliveryType,
            transportType
        );

        clientCode(logistics, timeType);
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