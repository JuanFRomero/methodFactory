import type { DeliveryType, TimeType, TransportType } from "../types/delivery";


export const transportsByDeliveryType: Record<DeliveryType, TransportType[]> = {
    road: [
        "truck",
        "bike",
        "van"
    ],
    sea:[
        "ship"
    ],
    flight: [
        "plane"
    ]
};

export const deliveryTypes: DeliveryType[] = [
     "road",
     "sea",
     "flight"
];

export const timeTypes: TimeType[] = [
    "normal",
    "express"
];