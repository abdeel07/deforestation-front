import React, { useState } from "react";

const SignUp = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };

    fetch("http://localhost:8080/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (response.ok) {
          window.alert("User registered successfully");
          setEmail("");
          setPassword("");
          onClose();
        } else {
          response.json().then(data => {
            window.alert(`Failed to register user: ${data.message}`);
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        window.alert("An error occurred during signup. Please try again later.");
      });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md shadow-md">
        <button
          type="button"
          onClick={onClose}
          className="ml-40 bg-gray-500  text-white py-2 px-4 rounded-md hover:bg-gray-400 transition-colors duration-200"
        >
          X
        </button>
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Password:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border p-2 w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-white hover:text-gray-600 border border-green-600 mr-8 transition-colors duration-200"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
