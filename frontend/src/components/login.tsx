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
    <div className="w-full h-[100vh] flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-6 md:w-1/2 w-[90%] border p-10"
      >
        <h2 className="text-xl">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
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
          id="password"
          value={data.password}
          onChange={handleChange}
          placeholder="Password"
          className="border p-2"
          required
        />
        <select
          value={data.role}
          id="role"
          onChange={handleChange}
          className="border p-2"
        >
          <option value="" defaultChecked>
            I am a
          </option>
          <option value="BRAND">Brand</option>
          <option value="CREATOR">Creator</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white p-2">
          Login
        </button>

        <p>
          Don't have an account?{" "}
          <span
            className="ml-3 text-blue-500 hover:underline cursor-pointer"
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
};
