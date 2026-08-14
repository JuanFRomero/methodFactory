
import express from "express";
import cors from "cors";
import { Transport } from "../transport";
import { createLogistics, createDeliveryStrategy } from "../delivery-factory";
import { TransportFragileDecorator } from "../decorator/fragile-decorator";
import { TrackingTransportDecorator } from "../decorator/tracking-transport-decorator";
import { InsuredTransportDecorator } from "../decorator/Insured-transport-decorator";

import {
    DeliveryType,
    TransportType,
    TimeType
} from "../types";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/test" , (req , rest ) => {
    rest.json({
        message :"backend on"
    });
});

app.post("/api/delivery" , (req , res)=>{
    try {
        const {
            deliveryType,
            transportType,
            timeType,
            fragile,
            insured

        } = req.body;

        if (
            !deliveryType ||
            !transportType ||
            !timeType ||
            typeof fragile !== "boolean" ||
            typeof insured !== "boolean"
        ) {
            return res.status(400).json({
                success: false,
                error: "Datos de entrega no válidos"
            });
        }

        const deliveryStrategy = createDeliveryStrategy(
            timeType as TimeType
        );

        const logistics = createLogistics(
            deliveryType as DeliveryType,
            transportType as TransportType,
            deliveryStrategy
        );

        let transport: Transport = logistics.createTransport();

        if(fragile){
            transport = new TransportFragileDecorator(transport);
        }

        if(insured){
            transport = new InsuredTransportDecorator(transport);
        }

        transport = new TrackingTransportDecorator(transport);

        const result = logistics.planDelivery(transport);

        return res.status(201).json({
            success: true,
            result
        });
    } catch (error: unknown) {
        const message = error instanceof Error
            ? error.message
            : "Ha ocurrido un error desconocido.";

        return res.status(400).json({
            success: false,
            error: message
        });
    }
});

app.listen(3000 , ()=>{
    console.log("servidor en http://localhost:3000");
});
