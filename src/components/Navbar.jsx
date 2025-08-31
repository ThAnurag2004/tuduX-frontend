import React from "react";
import logo from "../assets/logo.png";
import { IoReorderThreeOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div className="flex justify-between w-full px-10 py-6 bg-white">
      <div className="w-1/3">
        <img src={logo} className="w-30" />
      </div>
      <div className="flex justify-center items-center lg:hidden ">
        <IoReorderThreeOutline className="text-2xl" />
      </div>
      <div className="w-1/2 hidden lg:block">
        <div className="flex justify-evenly items-center">
          <h3 className="text-gray-500">Features</h3>
          <h3 className="text-gray-500">Contact</h3>
          <h3 className="text-gray-500">About</h3>
          <h3 className="text-gray-500">Sign In</h3>
          <button className="rounded-lg text-white py-1.5 px-3 bg-black">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
