import type { DeliveryRequest, DeliveryResponse } from "../types/delivery";

const API_URL = "http://localhost:3000/api/delivery";

export async function createDelivery( delivery: DeliveryRequest): Promise<DeliveryResponse> {
    
    const response = await fetch(API_URL , {
        method: "POST",
        headers: {
             "Content-Type": "application/json"
        },
        body: JSON.stringify(delivery)
    });
    
    const data : DeliveryResponse = await response.json();

    if (!response.ok) {

        if (!data.success) {
            throw new Error(data.error);
        }

        throw new Error(
            `Error HTTP: ${response.status}`
        );
    }

    return data;
}
