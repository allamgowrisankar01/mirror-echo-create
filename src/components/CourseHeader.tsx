
import React from "react";
import { Search } from "lucide-react";
import { Button } from "./ui/button";

const CourseHeader = () => {
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <a href="#" className="text-blue-600 font-bold text-2xl">
            coursera
          </a>
          <div className="hidden md:block bg-blue-500 h-10 w-52"></div>
        </div>
        
        <div className="relative w-full max-w-md mx-4">
          <input
            type="text"
            placeholder="Search in course"
            className="w-full border border-gray-300 rounded px-3 py-1.5 pr-10"
          />
          <Button 
            className="absolute right-0 top-0 bottom-0 bg-blue-600 text-white rounded-l-none" 
            size="sm"
          >
            <Search className="h-4 w-4" />
            <span className="ml-1">Search</span>
          </Button>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-gray-700">
            <span>🌐</span>
            <span>English</span>
            <span>▾</span>
          </div>
          <div className="text-gray-700">🔔</div>
          <div className="bg-blue-800 text-white rounded-full h-8 w-8 flex items-center justify-center">
            N
          </div>
          <div className="text-gray-700">▾</div>
        </div>
      </div>
    </header>
  );
};

export default CourseHeader;
