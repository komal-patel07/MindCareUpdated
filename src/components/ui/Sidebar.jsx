import { useState } from "react";
import { Home, Users, LineChart, Calendar, LogOut, ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
const Sidebar = ({firstLink,SecondLink,thirdLink,forthLink,fifthLink}) => {
  const [openSections, setOpenSections] = useState({ playground: false });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
    
  };

  return (
    <aside className="h-screen w-64  bg-gray-500 text-white flex flex-col justify-between">
      {/* Top Section */}
      <div>
        {/* Company Name */}
        <div className="p-4 flex items-center space-x-2 border-b">
        <div className="flex items-center text-xl sm:text-2xl md:text-3xl font-serif">
          <span className="text-2xl sm:text-3xl md:text-4xl">M</span>ind Care.
        </div>

        </div>

        {/* Navigation Links */}
        <nav className="mt-4">
          <div className="px-4 py-2 text-gray-400 uppercase text-xs">Platform</div>

          {/* Playground Section (Collapsible) */}
          <div>
            <button
              onClick={() => toggleSection("playground")}
              className="w-full flex items-center justify-between px-4 py-2 hover:bg-gray-200 hover:text-black"
            >
              <span className="flex items-center space-x-2">
                <Home size={16} />
                <span>Playground</span>
              </span>
              {openSections.playground ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </button>
            {openSections.playground && (
              <div className="ml-6 space-y-2">
                <Link to={"/"+firstLink} className="block px-4 py-2 rounded px-b  hover:bg-white hover:text-black">{firstLink}</Link>
                <Link to={"/"+SecondLink} className="block px-4 py-2 rounded px-b  hover:bg-white hover:text-black">{SecondLink}</Link>
                <Link to={"/"+thirdLink} className="block px-4 py-2 rounded px-b  hover:bg-white hover:text-black">{thirdLink}</Link>
                
              </div>
            )}
          </div>

          <a href="#" className="flex items-center space-x-2 px-4 py-2  px-b  hover:bg-white hover:text-black">
            <Users size={16} />
            <span>Models</span>
          </a>
          <a href="#" className="flex items-center space-x-2 px-4  py-2  px-b  hover:bg-white hover:text-black">
            <LineChart size={16} />
            <span>Documentation</span>
          </a>
          <a href="#" className="flex items-center space-x-2 px-4  py-2  px-b  hover:bg-white hover:text-black">
            <Calendar size={16} />
            <span>Settings</span>
          </a>
        </nav>
      </div>

      {/* Bottom Section - User Profile */}
      <div className="p-4 border-t ">
        <div className="flex text-gray-500 text-xl gap-5 items-center justify-center ">
          {/* <div className="w-10 h-10 bg-gray-600 rounded-full"></div> */}
          {/* <div>
            <p className="text-sm font-semibold">shadcn</p>
            <p className="text-xs text-gray-400">m@example.com</p>
          </div> */}
          <span className="text-white">Logout</span>
          <button className=" text-white hover:text-black">
            <LogOut size={40} />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
