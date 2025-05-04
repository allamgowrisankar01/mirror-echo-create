
import React from "react";
import { ChevronDown } from "lucide-react";

const CourseSidebar = () => {
  return (
    <div className="mb-8">
      <div className="flex items-start gap-4 mb-4">
        <div className="bg-red-200 rounded-full p-4 w-16 h-16 flex items-center justify-center">
          <div className="bg-red-400 rounded-full p-3 w-12 h-12"></div>
        </div>
        
        <div>
          <h1 className="text-lg font-bold">
            Natural Language Processing with Classification and Vector Spaces
          </h1>
          <p className="text-gray-600">DeepLearning.AI</p>
        </div>
      </div>
      
      <div className="border-b border-gray-200 pb-2 mb-4">
        <button className="flex items-center gap-2 text-sm font-medium">
          <ChevronDown className="h-4 w-4" />
          Course Material
        </button>
      </div>
      
      <div className="ml-5">
        <ul className="space-y-3">
          {[1, 2, 3, 4].map((week) => (
            <li key={week} className="flex items-center gap-2">
              <div className={`w-5 h-5 rounded-full ${week === 1 ? 'bg-blue-600' : 'bg-gray-300'} flex items-center justify-center text-white text-xs`}>
                {week === 1 ? '✓' : ''}
              </div>
              <span className={`${week === 1 ? 'font-medium' : ''}`}>Week {week}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-6 space-y-4">
        <p className="font-medium">Grades</p>
        <p className="font-medium">Notes</p>
        <p className="font-medium">Messages</p>
        <p className="font-medium flex items-center">
          Course
          <span className="ml-1 bg-blue-600 text-white text-xs px-1">INFO</span>
        </p>
      </div>
    </div>
  );
};

export default CourseSidebar;
