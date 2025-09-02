import React from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const handelSignUpClick = () => {
    navigate("/signup");
  };

  const handelLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="flex justify-between w-full px-10 py-6 bg-white">
      <div className="w-1/3">
        <img src={logo} className="w-30" />
      </div>
      <div className="w-1/2 hidden lg:block">
        <div className="flex justify-evenly items-center">
          <h3 className="text-gray-500 cursor-pointer hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105">Features</h3>
          <h3 className="text-gray-500 cursor-pointer hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105">Contact</h3>
          <h3 className="text-gray-500 cursor-pointer hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105">About</h3>
          <h3
            onClick={handelLoginClick}
            className="text-gray-500 cursor-pointer hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Sign In
          </h3>
          <button
            onClick={handelSignUpClick}
            className="rounded-lg text-white py-1.5 px-3 bg-black
           hover:bg-white hover:text-black 
              transition-all duration-300 ease-in-out border-2
              transform hover:scale-105 cursor-pointer
          "
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
