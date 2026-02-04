import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Login with " + email + ' and password ' + password);
    if (!email || !password) return;

    navigate("/dashboard");
  }

    return(
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
        <button type="submit">Login</button>
        </form>
    );
}