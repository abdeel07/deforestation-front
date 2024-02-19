import React, { useState } from "react";
import { useAuth } from '../contexts/AuthContext';  // Import the useAuth hook

import SignUp from './SignUp';
import axios from "axios";

const Login = ({ onClose }) => {
  const { login } = useAuth();  // Use the useAuth hook to get authentication context functions
  const [showSignUp, setShowSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/users/login", { email, password });

      const { success, userId, message } = response.data;

      if (success) {
        login(userId);  // Update your global auth state with the logged-in user's ID
        alert("Login Successful");
        onClose(); // Close the login modal or redirect as needed
      } else {
        setError(message);
      }
    } catch (error) {
      const errorMessage = error.response && error.response.data && error.response.data.message
        ? error.response.data.message
        : "An error occurred during login.";
      alert(errorMessage);
      setError(errorMessage);
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
