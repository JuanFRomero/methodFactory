import { useState } from "react";
import { createDelivery } from "../api/delivery-service";
import type { DeliveryRequest } from "../types/delivery";

export function useDelivery() {
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);


    async function create(delivery:DeliveryRequest): Promise<void> {
        try{
            console.log("1. Iniciando petición");
            setLoading(true);
            setError(null);
            setResult(null);

            const response = await createDelivery(delivery);
            console.log("2. Respuesta:", response);

            if(response.success){
                setResult(response.result);
            }
        }catch(error: unknown){
            console.log("3. Error:", error);
            if(error instanceof Error){
                setError(error.message);
            }else{
                setError("Error desconocido");
            }
        }finally{
            console.log("4. Petición terminada");
            setLoading(false);
        }        
    }
    return {
        result,
        error,
        loading,
        create
    }
}

