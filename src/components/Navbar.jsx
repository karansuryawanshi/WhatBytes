import React from "react";
import { ChartNoAxesColumn } from "lucide-react";
import { Trophy, FileText, Check } from "lucide-react";
const Navbar = () => {
  return (
    <div className="md:w-96 w-screen bg-white shadow-md rounded-lg flex justify-center">
      <div className="p-4 space-y-4 md:block flex items-center justify-between gap-6">
        <div className="flex items-center justify-center space-x-3 text-gray-600 bg-blue-50 p-2 cursor-pointer rounded">
          <ChartNoAxesColumn className="w-5 h-5 font-semibold text-black hidden sm:block" />
          <span className="font-semibold text-black text-sm sm:text-normal">
            Dashboard
          </span>
        </div>
        <div className="cursor-pointer flex items-center space-x-3 text-gray-600 hover:bg-blue-50 p-2 rounded">
          <Trophy className="w-5 h-5 hidden sm:block" />
          <span className="text-sm sm:text-normal">Skill Test</span>
        </div>
        <div className="cursor-pointer mb-4 flex items-center space-x-3 text-gray-600 hover:bg-blue-50 p-2 rounded">
          <FileText className="w-5 h-5 hidden sm:block" />
          <span className="text-sm sm:text-normal">Internship</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
