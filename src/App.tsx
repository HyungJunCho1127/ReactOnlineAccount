import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Login from './pages/Login'
import Dashboard from "./pages/Dashboard";
import MotorQuote from "./pages/MotorQuote";

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/quote/motor" element={<MotorQuote />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App