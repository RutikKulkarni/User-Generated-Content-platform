import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/login";
import { Register } from "./components/register";
import BrandDashboard from "./components/brand-dashoard";
import Home from "./components/Home";

const App = () => {
  const endpoint = process.env.REACT_APP_API_URL || '';

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login endpoint={endpoint} />} />
        <Route path="/register" element={<Register endpoint={endpoint} />} />
        <Route path="/dashboard" element={<BrandDashboard endpoint={endpoint} />} />
      </Routes>
    </Router>
  );
};

export default App;
