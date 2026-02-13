import { useState } from "react";
import type { Vehicle } from "../types/vehicle";
import type { Driver } from "../types/driver";
import DriverForm from "../components/DriverForm";
import type { QuoteStep } from "../types/quoteStep";
import VehicleForm from "../components/VehicleForm";
import { useNavigate  } from "react-router-dom";

export default function MotorQuote(){

    const navigate = useNavigate();
    
    const [step, setStep] = useState<QuoteStep>("driver");

    const [driver, setDriver] = useState<Driver>({
        name: "",
        age: "",
        postcode: "",
    });

    const [vehicle, setVehicle] = useState<Vehicle>({
        make: "",
        model: "",
        year: "",
        value: "",
    });

    return (
        <div>
            <h1>Motor Quote</h1>
            {step === "driver" && (
                <DriverForm
                driver={driver}
                setDriver={setDriver}
                onBack={() => navigate("/")}
                onNext={() => setStep("vehicle")}
            />
        )}

            {step === "vehicle" && (
                <VehicleForm
                vehicle={vehicle}
                setVehicle={setVehicle}
                onBack={() => setStep("driver")}
                onNext={() => setStep("summary")}
            />
        )}

            {step === "summary" && (
                <div>
                <h2>Quote Summary</h2>
                {/* quote summary later */}
                </div>
        )}
        </div>
    );
}