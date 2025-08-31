import TaskCard from "./TaskCard";

function Hero() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 px-8 py-6 mb-10">
      {/* Left Section */}
      <div className="flex-shrink p-4 max-w-xl text-center md:text-left">
        <h1 className="text-4xl md:text-6xl leading-tight">
          Simplify your productivity
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-600">
          tuduX is the modern todo app that helps you organize your life with
          minimal design and maximum functionality. Get things done,
          beautifully.
        </p>
        <div className="mt-7 flex gap-5">
          <button className="bg-black text-white px-6 py-3 rounded-lg text-lg">
            Let's Go →{" "}
          </button>
          <button className="border-2 rounded-lg px-5"> Watch demo </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 h-64 md:h-96 flex-shrink">
        <TaskCard />
      </div>
    </div>
  );
}

export default Hero;
