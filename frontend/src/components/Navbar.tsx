import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userName");
    navigate("/login");
  };

  const isLoggedIn = !!localStorage.getItem("authToken");
  const userName = localStorage.getItem("userName") || "User";

  return (
    <nav className="bg-blue-700 p-4 text-white flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-bold">
        UGC Platform
      </Link>
      <div className="flex items-center space-x-6">
        <Link
          to="/dashboard"
          className="hover:underline transition duration-200"
        >
          Dashboard
        </Link>
        {isLoggedIn ? (
          <div className="flex items-center space-x-4">
            <Link
              to="/profile"
              className="hover:underline transition duration-200"
            >
              Profile
            </Link>
            <Link
              to="/profile"
              className="flex items-center hover:underline transition duration-200"
            >
              <FaUserCircle className="text-2xl" />
              <span className="ml-2">{userName}</span>
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition duration-200"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition duration-200"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
