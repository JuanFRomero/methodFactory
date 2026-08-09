import { useState } from "react";

import { DeliveryForm } from "./components/DeliveryForm";

import { DeliveryResult } from "./components/DeliveryResults";

import { createDelivery }from "./api/delivery-service";

import type { DeliveryRequest } from "./types/delivery";

function App() {

    const [result, setResult] = useState<string | null>(null);

    const [error, setError] = useState<string | null>(null);

    const [loading, setLoading] = useState(false);

    async function handleCreateDelivery(
        delivery: DeliveryRequest
    ): Promise<void> {

        try {
            setLoading(true);
            setError(null);
            setResult(null);

            const response =
                await createDelivery(delivery);

            setResult(response.result);

        } catch (error) {

            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError(
                    "Ha ocurrido un error desconocido."
                );
            }

        } finally {
            setLoading(false);
        }
    }

    return (
        <main>

            <h1>
                Logistics Delivery
            </h1>

            <DeliveryForm
                onSubmit={handleCreateDelivery}
                loading={loading}
            />

            <DeliveryResult
                result={result}
                error={error}
            />

        </main>
    );
}

export default App;