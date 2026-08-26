import type { DeliveryRequest, DeliveryResponse } from "../types/delivery";

const API_URL = import.meta.env.VITE_API_URL;

export async function createDelivery( delivery: DeliveryRequest): Promise<DeliveryResponse> {
    
    const response = await fetch(`${API_URL}/api/delivery` , {
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
