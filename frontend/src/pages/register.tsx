import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface RegisterProps {
  endpoint: string;
}

export const Register: React.FC<RegisterProps> = ({ endpoint }) => {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !data.fullName ||
      !data.email ||
      !data.password ||
      !data.confirmPassword
    ) {
      setError("All fields are required.");
      return;
    }
    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await axios.post(`${endpoint}/api/auth/register`, {
        fullName: data.fullName,
        email: data.email,
        password: data.password,
        role: data.role,
      });
      setSuccess("Registration successful! Please log in.");
      setError("");
    } catch (err) {
      setError("Registration failed. Please try again.");
    }
  };

  const handleChange = (e: any) =>
    setData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));

  console.log(data, "DATA");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-5">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-6 w-full max-w-md border bg-white p-10 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Register
        </h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}
        <input
          type="text"
          value={data.fullName}
          onChange={handleChange}
          placeholder="Name"
          id="fullName"
          className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          required
        />
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
          value={data.password}
          onChange={handleChange}
          placeholder="Password"
          id="password"
          className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          required
        />
        <input
          type="password"
          value={data.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          id="confirmPassword"
          className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          required
        />
        <select
          value={data.role}
          onChange={handleChange}
          className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          id="role"
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
          Register
        </button>

        <p className="text-center">
          Already have an account?{" "}
          <span
            className="ml-1 text-blue-500 hover:underline cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};
