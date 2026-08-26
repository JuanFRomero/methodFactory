import { DeliveryForm } from "./components/DeliveryForm";
import { DeliveryResult } from "./components/DeliveryResults";
import { useDelivery } from "./hooks/useDelivery";

function App() {
    const {
        result,
        error,
        loading,
        create
    } = useDelivery();

    return (
        <main>

            <h1>
                Logistics Delivery
            </h1>

            <DeliveryForm
                onSubmit={create}
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