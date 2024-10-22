// src/components/Home.tsx

import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our App!</h1>
      <p className="text-lg mb-6">
        This is the home page. You can navigate to different sections of the app
        using the links below.
      </p>
      <nav>
        <ul className="space-y-2">
          <li>
            <a href="/login" className="text-blue-500 hover:underline">
              Login
            </a>
          </li>
          <li>
            <a href="/register" className="text-blue-500 hover:underline">
              Register
            </a>
          </li>
          <li>
            <a href="/dashboard" className="text-blue-500 hover:underline">
              Dashboard
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
