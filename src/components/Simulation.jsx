import React from "react";
import TodoPreview from './TodoPreview'

function Simulation() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h1 className="text-3xl sm:text-4xl">
          See tuduX in action
        </h1>
        <p className="mt-4 text-gray-500 text-base sm:text-lg">
          Experience the intuitive interface and powerful features that make task management effortless.
        </p>
      </div>
      <TodoPreview />
    </div>
  );
}

export default Simulation;
