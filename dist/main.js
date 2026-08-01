"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = require("readline/promises");
const process_1 = require("process");
const truck_logistic_1 = require("./truck-logistic");
const bike_logistic_1 = require("./bike-logistic");
const sea_logistic_1 = require("./sea-logistic");
const van_logistic_1 = require("./van-logistic");
const flight_logistic_1 = require("./flight-logistic");
function parseDeliveryType(value) {
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
    throw new Error("Tipo de entrega no válido. Debes escribir 'road', 'sea' o 'flight'.");
}
function parseTransportType(value) {
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
    throw new Error("Tipo de transporte no válido.");
}
function parseTimeType(value) {
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
    throw new Error("Tipo de envío no válido. Debes escribir 'normal', 'express' o 'fragile'.");
}
function createLogistics(deliveryType, transportType) {
    if (deliveryType === "road" &&
        transportType === "truck") {
        return new truck_logistic_1.TruckLogistics();
    }
    if (deliveryType === "road" &&
        transportType === "bike") {
        return new bike_logistic_1.BikeLogistic();
    }
    if (deliveryType === "road" &&
        transportType === "van") {
        return new van_logistic_1.VanLogistics();
    }
    if (deliveryType === "sea" &&
        transportType === "ship") {
        return new sea_logistic_1.SeaLogistics();
    }
    if (deliveryType === "flight" &&
        transportType === "plane") {
        return new flight_logistic_1.PlaneLogistics();
    }
    throw new Error(`Combinación no válida: entrega '${deliveryType}' con transporte '${transportType}'.`);
}
function clientCode(logistics, timeType) {
    console.log(logistics.planDelivery(timeType));
}
async function main() {
    const readline = (0, promises_1.createInterface)({
        input: process_1.stdin,
        output: process_1.stdout
    });
    try {
        const deliveryInput = await readline.question("¿Qué tipo de entrega quieres usar? road/sea/flight: ");
        const transportInput = await readline.question("¿Qué tipo de transporte quieres usar? truck/bike/van/ship/plane: ");
        const timeInput = await readline.question("¿Qué tipo de envío necesitas? normal/express/fragile: ");
        const deliveryType = parseDeliveryType(deliveryInput);
        const transportType = parseTransportType(transportInput);
        const timeType = parseTimeType(timeInput);
        const logistics = createLogistics(deliveryType, transportType);
        clientCode(logistics, timeType);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        }
        else {
            console.error("Ha ocurrido un error desconocido.");
        }
    }
    finally {
        readline.close();
    }
}
void main();
