import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../services/AuthService";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Login with " + email + ' and password ' + password);
    setError(null);

    const result = AuthService.login(email, password);

    if (!result.ok) {
      if (result.reason === "ACCOUNT_NOT_FOUND") {
        setError("Account not found");
      } else {
        setError("Incorrect password");
      }
      return;
    }

    navigate(`/dashboard?policy=${result.policyNumber}`);
  }

    return(
      <div>
        <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="email">Email </label>
        <input 
            id ="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            autoComplete="email"
        />
        <br/>
        <label htmlFor="password">Password</label>
        <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
        />
        {error && (<p style={{ color: "crimson", margin: 0 }}>{error}</p>)}
        <br/> 
        <br/>
        <button type="submit">Login</button>
        </form>
        <br/>
          <button onClick={()=> navigate("/quote/motor")}>Motor Quote</button>
        </div>
    );
}