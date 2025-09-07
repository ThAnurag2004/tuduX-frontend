import Navbar from "../components/dashboard/Navbar";
import Hero from "../components/dashboard/Hero";

export const Dashboard = () => {
  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      <div className="flex flex-col md:flex-row h-[calc(100vh-64px)] w-full gap-4 overflow-hidden">
        <Hero />
      </div>
    </div>
  );
};
