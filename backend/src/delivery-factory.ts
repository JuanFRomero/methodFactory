import { Logistics } from "./logistics";
import { TruckLogistics } from "./truck-logistic";
import { BikeLogistic } from "./bike-logistic";
import { SeaLogistics } from "./sea-logistic";
import { VanLogistics } from "./van-logistic";
import { PlaneLogistics } from "./flight-logistic";
import { DeliveryStrategy } from "./steategy/delivery-strategy";
import { NormalDeliveryStrategy } from "./steategy/normal-delivery-strategy";
import { ExpressDeliveryStrategy } from "./steategy/express-delivery-strategy";

import {
    DeliveryType,
    TransportType,
    TimeType
} from "./types";

export function createLogistics(
    deliveryType: DeliveryType,
    transportType: TransportType,
    deliveryStrategy: DeliveryStrategy
): Logistics {
    if (
        deliveryType === "road" &&
        transportType === "truck"
    ) {
        return new TruckLogistics(deliveryStrategy);
    }

    if (
        deliveryType === "road" &&
        transportType === "bike"
    ) {
        return new BikeLogistic(deliveryStrategy);
    }

    if (
        deliveryType === "road" &&
        transportType === "van"
    ) {
        return new VanLogistics(deliveryStrategy);
    }

    if (
        deliveryType === "sea" &&
        transportType === "ship"
    ) {
        return new SeaLogistics(deliveryStrategy);
    }

    if (
        deliveryType === "flight" &&
        transportType === "plane"
    ) {
        return new PlaneLogistics(deliveryStrategy);
    }

    throw new Error(
        `Combinación no válida: entrega '${deliveryType}' con transporte '${transportType}'.`
    );
}

export function createDeliveryStrategy( 
    timeType : TimeType
 ): DeliveryStrategy{
    if(timeType == "normal"){
        return new NormalDeliveryStrategy();
    }
    if(timeType == "express"){
        return new ExpressDeliveryStrategy();
    }

        throw new Error(
        `No existe una estrategia para el tipo '${timeType}'.`
    );

}
