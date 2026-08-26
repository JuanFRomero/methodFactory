"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLogistics = createLogistics;
exports.createDeliveryStrategy = createDeliveryStrategy;
const truck_logistic_1 = require("./truck-logistic");
const bike_logistic_1 = require("./bike-logistic");
const sea_logistic_1 = require("./sea-logistic");
const van_logistic_1 = require("./van-logistic");
const flight_logistic_1 = require("./flight-logistic");
const normal_delivery_strategy_1 = require("./steategy/normal-delivery-strategy");
const express_delivery_strategy_1 = require("./steategy/express-delivery-strategy");
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
function createDeliveryStrategy(timeType) {
    if (timeType == "normal") {
        return new normal_delivery_strategy_1.NormalDeliveryStrategy();
    }
    if (timeType == "express") {
        return new express_delivery_strategy_1.ExpressDeliveryStrategy();
    }
    throw new Error(`No existe una estrategia para el tipo '${timeType}'.`);
}
