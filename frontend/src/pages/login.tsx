import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  endpoint: string;
}

export const Login: React.FC<LoginProps> = ({ endpoint }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
    role: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.email || !data.password) {
      setError("All fields are required.");
      return;
    }

    try {
      const response = await axios.post(`${endpoint}/api/auth/login`, data);

      localStorage.setItem("authToken", response.data.tokenDetails.token);
      localStorage.setItem("userRole", data.role);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid login credentials.");
    }
  };

  const handleChange = (e: any) =>
    setData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-5">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-6 w-full max-w-md border bg-white p-10 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <input
          type="email"
          value={data.email}
          id="email"
          onChange={handleChange}
          placeholder="Email"
          className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          required
        />
        <input
          type="password"
          id="password"
          value={data.password}
          onChange={handleChange}
          placeholder="Password"
          className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          required
        />
        <select
          value={data.role}
          id="role"
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          required
        >
          <option value="" disabled>
            I am a
          </option>
          <option value="BRAND">Brand</option>
          <option value="CREATOR">Creator</option>
        </select>
        <button
          type="submit"
          className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
        >
          Login
        </button>

        <p className="text-center">
          Don't have an account?{" "}
          <span
            className="ml-1 text-blue-500 hover:underline cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
};
