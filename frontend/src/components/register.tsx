import React, { useState } from "react";
import axios from "axios";

interface RegisterProps {
  endpoint: string;
}

export const Register: React.FC<RegisterProps> = ({ endpoint }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState<"brand" | "creator">("brand");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await axios.post(`${endpoint}/api/register`, { name, email, password, role });
      setSuccess("Registration successful! Please log in.");
      setError("");
    } catch (err) {
      setError("Registration failed. Please try again.");
    }
  };

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
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="border p-2"
          required
        />
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
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
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
          Register
        </button>
      </form>
    </div>
  );
};
