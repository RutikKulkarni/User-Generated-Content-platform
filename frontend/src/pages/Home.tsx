import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 mt-36 ">
  <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
    Welcome to User Generated Content Platform App!
  </h1>
  <p className="text-md md:text-lg text-gray-600 mb-8">
    This is the home page. You can navigate to different sections of the app using the links below.
  </p>
  <nav>
  <ul className="flex space-x-6">
    <li>
      <a
        href="/login"
        className="text-blue-600 hover:underline font-semibold transition duration-200"
      >
        Login
      </a>
    </li>
    <li>
      <a
        href="/register"
        className="text-blue-600 hover:underline font-semibold transition duration-200"
      >
        Register
      </a>
    </li>
    <li>
      <a
        href="/dashboard"
        className="text-blue-600 hover:underline font-semibold transition duration-200"
      >
        Dashboard
      </a>
    </li>
  </ul>
</nav>

</div>

  );
};

export default Home;
