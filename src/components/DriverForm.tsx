import type { Driver } from "../types/driver";

export default function DriverForm({driver, setDriver, onNext, onBack}:{ 
    driver: Driver; setDriver: React.Dispatch<React.SetStateAction<Driver>>; onNext: () => void; onBack: () => void;}){

    return(
        <form onSubmit={(e) => {e.preventDefault(); onNext();}}>
        <label>Name :</label>
        <input type="text" value={driver.name} onChange={(e) => setDriver({...driver, name: e.target.value})} required/>
        <br/>
        <label>Age :</label>
        <input type="number" value={driver.age} onChange={(e) => setDriver({...driver, age: e.target.value === "" ? "" :Number(e.target.value)})} required/>
        <br/>
        <label>Postcode :</label>
        <input type="number" value={driver.postcode} onChange={(e) => setDriver({...driver, postcode: e.target.value === "" ? "" :Number(e.target.value)})} required/>
        <br/>
        <button type="button" onClick={onBack}>Back</button>
        <button type="submit">Next</button>
        </form>
    );
}