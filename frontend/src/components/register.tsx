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
    <div className="w-full h-[100vh] flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-6 md:w-1/2 w-[90%] border p-10"
      >
        <h2 className="text-xl">Register</h2>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <input
          type="text"
          value={data.fullName}
          onChange={handleChange}
          placeholder="Name"
          id="fullName"
          className="border p-2"
          required
        />
        <input
          type="email"
          value={data.email}
          id="email"
          onChange={handleChange}
          placeholder="Email"
          className="border p-2"
          required
        />
        <input
          type="password"
          value={data.password}
          onChange={handleChange}
          placeholder="Password"
          id="password"
          className="border p-2"
          required
        />
        <input
          type="password"
          value={data.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          id="confirmPassword"
          className="border p-2"
          required
        />
        <select
          value={data.role}
          onChange={handleChange}
          className="border p-2"
          id="role"
        >
          <option value="" defaultChecked>
            I am a
          </option>
          <option value="BRAND">Brand</option>
          <option value="CREATOR">Creator</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white p-2">
          Register
        </button>

        <p>
          Already have an account?
          <span
            className="ml-3 text-blue-500 hover:underline cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};
