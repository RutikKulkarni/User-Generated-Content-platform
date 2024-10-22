import React, { useState } from "react";
import axios from "axios";

interface LoginProps {
  endpoint: string;
}

export const Login: React.FC<LoginProps> = ({ endpoint }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"brand" | "creator">("brand");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("All fields are required.");
      return;
    }

    try {
      const response = await axios.post(`${endpoint}/api/login`, {
        email,
        password,
        role,
      });

      if (response.status === 201) {
      }
    } catch (err) {
      setError("Invalid login credentials.");
    }
  };

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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border p-2"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border p-2"
          required
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value as "brand" | "creator")}
          className="border p-2"
        >
          <option value="brand">Brand</option>
          <option value="creator">Creator</option>
        </select>
        <button type="submit" className="bg-blue-500 text-white p-2">
          Login
        </button>
      </form>
    </div>
  );
};
