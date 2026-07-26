"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const road_logictic_1 = require("./road-logictic");
const sea_logictic_1 = require("./sea-logictic");
function clientCode(logistics) {
    console.log(logistics.planDelivery());
}
const deliveryType = "road";
let logistics;
if (deliveryType === "road") {
    logistics = new road_logictic_1.RoadLogistics();
}
else if (deliveryType === "sea") {
    logistics = new sea_logictic_1.SeaLogistics();
}
else {
    throw new Error("Tipo de entrega no válido.");
}
clientCode(logistics);
