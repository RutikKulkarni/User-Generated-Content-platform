import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import BrandDashboard from "./components/Brand-dashoard";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const endpoint = process.env.REACT_APP_API_URL || "http://localhost:8082";

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login endpoint={endpoint} />} />
            <Route
              path="/register"
              element={<Register endpoint={endpoint} />}
            />
            <Route
              path="/dashboard"
              element={<BrandDashboard endpoint={endpoint} />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
