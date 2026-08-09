"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = require("readline/promises");
const process_1 = require("process");
const truck_logistic_1 = require("./truck-logistic");
const bike_logistic_1 = require("./bike-logistic");
const sea_logistic_1 = require("./sea-logistic");
const van_logistic_1 = require("./van-logistic");
const flight_logistic_1 = require("./flight-logistic");
const fragile_decorator_1 = require("./decorator/fragile-decorator");
const tracking_transport_decorator_1 = require("./decorator/tracking-transport-decorator");
const Insured_transport_decorator_1 = require("./decorator/Insured-transport-decorator");
const refrigerated_transport_decorator_1 = require("./decorator/refrigerated-transport-decorator");
const normal_delivery_strategy_1 = require("./steategy/normal-delivery-strategy");
const express_delivery_strategy_1 = require("./steategy/express-delivery-strategy");
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
    throw new Error("Tipo de envío no válido. Debes escribir 'normal', 'express'.");
}
function parseYesOrNotOption(value, optionName) {
    const normalizedValue = value.trim().toLocaleLowerCase();
    if (normalizedValue == "yes" ||
        normalizedValue == "y") {
        return true;
    }
    if (normalizedValue == "no" ||
        normalizedValue == "n") {
        return false;
    }
    throw new Error("Opción no valida, debes escribir 'yes' o 'no'");
}
function createLogistics(deliveryType, transportType, deliveryStrategy) {
    if (deliveryType === "road" &&
        transportType === "truck") {
        return new truck_logistic_1.TruckLogistics(deliveryStrategy);
    }
    if (deliveryType === "road" &&
        transportType === "bike") {
        return new bike_logistic_1.BikeLogistic(deliveryStrategy);
    }
    if (deliveryType === "road" &&
        transportType === "van") {
        return new van_logistic_1.VanLogistics(deliveryStrategy);
    }
    if (deliveryType === "sea" &&
        transportType === "ship") {
        return new sea_logistic_1.SeaLogistics(deliveryStrategy);
    }
    if (deliveryType === "flight" &&
        transportType === "plane") {
        return new flight_logistic_1.PlaneLogistics(deliveryStrategy);
    }
    throw new Error(`Combinación no válida: entrega '${deliveryType}' con transporte '${transportType}'.`);
}
function clientCode(logistics, transport) {
    console.log(logistics.planDelivery(transport));
}
function createDeliveryStrategy(timeType) {
    if (timeType == "normal") {
        return new normal_delivery_strategy_1.NormalDeliveryStrategy();
    }
    if (timeType == "express") {
        return new express_delivery_strategy_1.ExpressDeliveryStrategy();
    }
    throw new Error(`No existe una estrategia para el tipo '${timeType}'.`);
}
async function main() {
    const readline = (0, promises_1.createInterface)({
        input: process_1.stdin,
        output: process_1.stdout
    });
    try {
        const deliveryInput = await readline.question("¿Qué tipo de entrega quieres usar? road/sea/flight: ");
        const transportInput = await readline.question("¿Qué tipo de transporte quieres usar? truck/bike/van/ship/plane: ");
        const timeInput = await readline.question("¿Qué tipo de envío necesitas? normal o express : ");
        const fragileInput = await readline.question("La mercancía es frágil? y/n");
        const InsuredInput = await readline.question("El envío tendrá seguro? y/n");
        const refrigeratedInput = await readline.question("El envío necesita refrigeración? y/n");
        const deliveryType = parseDeliveryType(deliveryInput);
        const transportType = parseTransportType(transportInput);
        const timeType = parseTimeType(timeInput);
        const isFragile = parseYesOrNotOption(fragileInput, "mercancia fragil");
        const isInsured = parseYesOrNotOption(InsuredInput, "mercancia asegurada");
        const isRefrigerated = parseYesOrNotOption(refrigeratedInput, "mercancia refrigerada");
        const deliveryStrategy = createDeliveryStrategy(timeType);
        const logistics = createLogistics(deliveryType, transportType, deliveryStrategy);
        let transport = logistics.createTransport();
        if (isFragile) {
            transport = new fragile_decorator_1.TransportFragileDecorator(transport);
        }
        if (isInsured) {
            transport = new Insured_transport_decorator_1.InsuredTransportDecorator(transport);
        }
        if (isRefrigerated) {
            transport = new refrigerated_transport_decorator_1.RefrigeratedTransportDecorator(transport);
        }
        transport = new tracking_transport_decorator_1.TrackingTransportDecorator(transport);
        clientCode(logistics, transport);
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
