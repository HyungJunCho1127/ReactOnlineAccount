import type { Driver } from "../types/driver";
import { useState } from "react";
import type { quoteStep } from "../types/quoteStep";

export default function DiverForm(){
    const [step, setStep] = useState<quoteStep>("driver");

    const [driver, setDriver] = useState<Driver>({
        name: "",
        age: "",
        postcode: "",
    });

    return(
        <form onSubmit={(e) => {e.preventDefault(); setStep("vehicle")}}>
        <label>Name :</label>
        <input type="text" value={driver.name} onChange={(e) => setDriver({...driver, name: e.target.value})} required/>
        <br/>
        <label>Age :</label>
        <input type="number" value={driver.age} onChange={(e) => setDriver({...driver, age: e.target.value === "" ? "" :Number(e.target.value)})} required/>
        <br/>
        <label>Postcode :</label>
        <input type="number" value={driver.postcode} onChange={(e) => setDriver({...driver, postcode: e.target.value === "" ? "" :Number(e.target.value)})} required/>
        <br/>
        <button type="submit">Next</button>
        </form>
    );
}