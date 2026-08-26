"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const delivery_factory_1 = require("../delivery-factory");
const fragile_decorator_1 = require("../decorator/fragile-decorator");
const tracking_transport_decorator_1 = require("../decorator/tracking-transport-decorator");
const Insured_transport_decorator_1 = require("../decorator/Insured-transport-decorator");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/api/test", (req, rest) => {
    rest.json({
        message: "backend on"
    });
});
app.post("/api/delivery", (req, res) => {
    try {
        const { deliveryType, transportType, timeType, fragile, insured } = req.body;
        if (!deliveryType ||
            !transportType ||
            !timeType ||
            typeof fragile !== "boolean" ||
            typeof insured !== "boolean") {
            return res.status(400).json({
                success: false,
                error: "Datos de entrega no válidos"
            });
        }
        const deliveryStrategy = (0, delivery_factory_1.createDeliveryStrategy)(timeType);
        const logistics = (0, delivery_factory_1.createLogistics)(deliveryType, transportType, deliveryStrategy);
        let transport = logistics.createTransport();
        if (fragile) {
            transport = new fragile_decorator_1.TransportFragileDecorator(transport);
        }
        if (insured) {
            transport = new Insured_transport_decorator_1.InsuredTransportDecorator(transport);
        }
        transport = new tracking_transport_decorator_1.TrackingTransportDecorator(transport);
        const result = logistics.planDelivery(transport);
        return res.status(201).json({
            success: true,
            result
        });
    }
    catch (error) {
        const message = error instanceof Error
            ? error.message
            : "Ha ocurrido un error desconocido.";
        return res.status(400).json({
            success: false,
            error: message
        });
    }
});
app.listen(3000, () => {
    console.log("servidor en http://localhost:3000");
});
