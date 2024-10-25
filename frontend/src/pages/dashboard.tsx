import React, { useEffect } from "react";
import BrandDashboard from "../components/Brand-dashoard";
import CreatorDashboard from "../components/Creator-dashoard";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC<{ endpoint: string }> = ({ endpoint }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      navigate("/login");
    }
  }, [navigate]);

  const userRole = localStorage.getItem("userRole");

  return (
    <div className="dashboard-container">
      {userRole === "brand" ? (
        <BrandDashboard endpoint={endpoint} />
      ) : userRole === "creator" ? (
        <CreatorDashboard />
      ) : (
        <p>Unauthorized access. Please log in with a valid account.</p>
      )}
    </div>
  );
};

export default Dashboard;
