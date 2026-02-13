import type { Vehicle } from "../types/vehicle";

export default function VehicleForm({vehicle, setVehicle, onNext, onBack}: 
    {vehicle: Vehicle; setVehicle: React.Dispatch<React.SetStateAction<Vehicle>>; onNext: () => void; onBack: () => void;}){
        return(
            <form onSubmit={(e) =>{e.preventDefault(); onNext();}}>
                <label>Make:</label>
                <input type="text" value={vehicle.make} onChange={(e) => setVehicle({ ...vehicle, make: e.target.value})}/>
                <br/>
                <label>Model:</label>
                <input type="text" value={vehicle.model} onChange={(e) => setVehicle({ ...vehicle, model: e.target.value})}/>
                <br/>
                <label>Year:</label>
                <input type="number" value={vehicle.year} onChange={(e) => setVehicle({ ...vehicle, year: e.target.value === "" ? "" :Number(e.target.value)})}/>
                <br/>
                <label>Value:</label>
                <input type="number" value={vehicle.value} onChange={(e) => setVehicle({ ...vehicle, value: e.target.value === "" ? "" :Number(e.target.value)})}/>
                <br/>
                <button type="button" onClick={onBack}>Back </button>
                <button type="submit">Next</button>
            </form>
        )
}