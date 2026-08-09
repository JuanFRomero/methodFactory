export type DeliveryType =
    | "road"
    | "sea"
    | "flight";

export type TransportType =
    | "truck"
    | "bike"
    | "van"
    | "ship"
    | "plane";

export type TimeType =
    | "normal"
    | "express";

export interface DeliveryRequest {
    deliveryType: DeliveryType;
    transportType: TransportType;
    timeType: TimeType;
    fragile: boolean;
    insured: boolean;
}

export interface DeliveryResponse {
    success: boolean;
    result: string;
}