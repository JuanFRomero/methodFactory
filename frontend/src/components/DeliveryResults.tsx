interface DeliveryResultProps {
    result: string | null;
    error: string | null;
}

export function DeliveryResult({
    result,
    error
}: DeliveryResultProps) {

    if (error) {
        return (
            <div>
                <h3>Error</h3>
                <p>{error}</p>
            </div>
        );
    }

    if (!result) {
        return null;
    }

    return (
        <div>
            <h3>Resultado</h3>

            <p>{result}</p>
        </div>
    );
}