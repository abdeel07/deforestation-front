import React, { useState } from "react";
import { useAuth } from '../contexts/AuthContext';  // Import the useAuth hook

import SignUp from './SignUp';

const Login = ({ onClose }) => {
  const { login } = useAuth();  // Use the useAuth hook to get authentication context functions
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const student = { email, password };

    try {
      const response = await fetch("http://localhost:8080/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      });

      if (response.ok) {
        window.alert("Login Successful");
        login();  // Call the login function from the authentication context
        setEmail("");
        setPassword("");
      } else {
        alert("Wrong email or password!");
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md shadow-md">
        <button
          type="button"
          onClick={onClose}
          className="ml-40 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-400 transition-colors duration-200"
        >
          X
        </button>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Your form inputs */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"  // Use type="password" for password input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2 w-full"
              required
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-white hover:text-gray-600 border border-green-600 mr-8 transition-colors duration-200"
          >
            Login
          </button>
          <button
            type="button"  // Change to type="button" to prevent form submission
            onClick={() => setShowSignUp(true)} 
            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-white hover:text-gray-600 border border-green-600 transition-colors duration-200"
          >
            Sign Up
          </button>
        </form>
      </div>
      {showSignUp && <SignUp onClose={() => setShowSignUp(false)} />}
    </div>
  );
};

export default Login;
