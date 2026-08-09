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

    if(!response.ok){
        
        throw new Error(
            "No se pudo crear la entrega"
        );
    }
    const data : DeliveryResponse = await response.json();

    return data;
}
