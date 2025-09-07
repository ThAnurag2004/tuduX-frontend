import MainContent from "./MainContent";
import { Calendar } from 'lucide-react';

function Hero() {
  return (
    <div className="flex flex-col md:flex-row w-full h-full">
      {/* Sidebar for desktop/tablet, top bar for mobile */}
      <div className="border bg-gray-100 w-full md:w-1/6 md:min-h-[calc(100vh-64px)] p-4 md:sticky md:top-0 hidden md:block">
        <div className="flex-col justify-between">
          <div className="m-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Calendar />
                <h1 className="font-semibold">Today</h1>
              </div>
              <h1 className="text-md">3</h1>
            </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
                <Calendar />
                <h1 className="font-semibold">This week</h1>
              </div>
            <h1 className="text-md">30</h1>
          </div>
          </div>
          <div className="mt-10">
            <h1 className="text-lg font-bold">Category</h1>
            <ol className="ml-5 mt-1">
              <li>Personal</li>
              <li>work</li>
              <li>school</li>
            </ol>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="border w-full min-h-[200px] overflow-scroll p-4 mx-0 flex-col justify-between">
        <MainContent />
      </div>

      {/* Mobile Add Task button */}
      <div className="flex justify-center m-4 md:hidden">
        <button className="bg-black text-white px-5 py-1 rounded-lg text-lg border-2 border-black hover:bg-white hover:text-black transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer shadow-md">
          Add Task
        </button>
      </div>
    </div>
  );
}

export default Hero;
