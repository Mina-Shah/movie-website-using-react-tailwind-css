import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }

    console.log("Email:", email);
    console.log("Password:", password);
    setError("");
    navigate("/home");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      <div className="w-11/12 max-w-md bg-zinc-900 p-6 rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded bg-zinc-800 border border-gray-600 focus:ring-2 focus:ring-lime-600 focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-2 text-sm">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 rounded bg-zinc-800 border border-gray-600 focus:ring-2 focus:ring-lime-600 focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-lime-600 text-white py-2 rounded hover:bg-lime-700 transition-colors"
         >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
