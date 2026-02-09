import { useState } from "react";
import type { Vehicle } from "../types/vehicle";
import DiverForm from "../components/DriverForm";

export default function MotorQuote(){


    const [vehicle, setVehicle] = useState<Vehicle>({
        make: "",
        model: "",
        year: "",
        value: "",
    });

    return (
        <div>
            <h1>Motor Quote</h1>
            <DiverForm/>
        </div>
    );
}