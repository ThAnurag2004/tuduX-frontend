import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handelHome = () => {
    navigate('/')
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    // Call your login API here
  };

  return (
    <div className="bg-black min-h-screen flex justify-center items-center px-4 py-6">
      <div className="bg-white p-6 sm:p-10 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-sm sm:text-base">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium text-sm sm:text-base">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 sm:py-3 bg-black text-white rounded-lg hover:bg-white hover:text-black border-2 transition-all duration-300 text-sm sm:text-base"
          >
            Login
          </button>
        </form>

        {/* Forgot password / Sign up */}
        <p className="text-center mt-4 text-gray-500 text-sm sm:text-base">
          Don't have an account?{" "}
          <a href="/signup" className="text-black font-medium hover:underline">
            Sign Up
          </a>
        </p>
        <p onClick={handelHome} className="text-center cursor-pointer hover:underline">Back to home</p>
      </div>
    </div>
  );
};
