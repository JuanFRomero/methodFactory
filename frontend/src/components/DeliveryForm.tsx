import React, { useState } from "react";

import type { DeliveryRequest , DeliveryType , TransportType , TimeType } from "../types/delivery";

interface DeliveryFromProps { onSubmit : ( delivery : DeliveryRequest ) => void;
    loading : boolean;
}

export function DeliveryForm({ onSubmit, loading } : DeliveryFromProps ){
    
    const [ deliveryType , setDeliveryType ] = useState<DeliveryType>("road");
    const [ transportType , setTransportType ] = useState<TransportType>("truck");
    const [ timeType ,setTimeType ] = useState<TimeType>("normal");
    const [ fragile, setFragile ] = useState(false);
    const [ insured , setInsured ] = useState(false);
    const [ refrigerated , setRefrigerated ] = useState(false);

    function handleSubmit( event : React.FormEvent<HTMLFormElement> ) : void {
        event.preventDefault();

        const delivery: DeliveryRequest = {
            deliveryType,
            transportType,
            timeType,
            fragile,
            insured,
            refrigerated

        }

        onSubmit(delivery);
    }

 return (
        <form onSubmit={handleSubmit}>

            <h2>Crear entrega</h2>

            <div>
                <label>Tipo de entrega</label>

                <select
                    value={deliveryType}
                    onChange={(event) =>
                        setDeliveryType(
                            event.target.value as DeliveryType
                        )
                    }
                >
                    <option value="road">
                        Road
                    </option>

                    <option value="sea">
                        Sea
                    </option>

                    <option value="flight">
                        Flight
                    </option>
                </select>
            </div>

            <div>
                <label>Transporte</label>

                <select
                    value={transportType}
                    onChange={(event) =>
                        setTransportType( event.target.value as TransportType
                        )
                    }
                >
                    <option value="truck">
                        Truck
                    </option>

                    <option value="bike">
                        Bike
                    </option>

                    <option value="van">
                        Van
                    </option>

                    <option value="ship">
                        Ship
                    </option>

                    <option value="plane">
                        Plane
                    </option>
                </select>
            </div>

            <div>
                <label>Velocidad</label>

                <select
                    value={timeType}
                    onChange={(event) =>
                        setTimeType( event.target.value  as TimeType )
                    }
                >
                    <option value="normal">
                        Normal
                    </option>

                    <option value="express">
                        Express
                    </option>
                </select>
            </div>

            <label>
                <input
                    type="checkbox"
                    checked={fragile}
                    onChange={(event) =>
                        setFragile( event.target.checked )
                    }
                />

                Mercancía frágil
            </label>

            <label>
                <input
                    type="checkbox"
                    checked={insured}
                    onChange={(event) =>
                        setInsured( event.target.checked )
                    }
                />

                Seguro
            </label>

            <label>
                <input
                    type="checkbox"
                    checked={refrigerated}
                    onChange={(event) =>
                        setRefrigerated( event.target.checked )
                    }
                />

                Refrigeración
            </label>



            <button type="submit" disabled={loading} >
                { loading ? "Creando..." : "Crear entrega" }
            </button>

        </form>
    );

}