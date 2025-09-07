import React from "react";
import { Inbox } from 'lucide-react';

function Navbar() {
  return (
    <div className="flex justify-between items-center w-full px-10 py-5 bg-white">
      <div className="flex items-center gap-2">
        <Inbox />
        <h1 className="text-2xl font-bold">tuduX</h1>
      </div>
      <div className="hidden justify-between gap-3 md:flex">
        <button
          className="bg-black text-white px-5 py-1 rounded-lg text-lg 
              border-2 border-black
              hover:bg-white hover:text-black 
              transition-all duration-300 ease-in-out 
              transform hover:scale-105 cursor-pointer shadow-md"
        >
          Add Task
        </button>
        <button
          className="text-md hover:text-red-500 font-semibold
          text-white px-5 py-1 rounded-lg transition-all duration-300 
            ease-in-out transform cursor-pointer hover:scale-105
            bg-black hover:bg-white hover:border-2 "
        >
          Logout
        </button>
      </div>
      
    </div>
  );
}

export default Navbar;
