
import React from "react";
import { Calendar } from "lucide-react";

const CourseProgress = () => {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  
  return (
    <div className="space-y-8">
      {/* Weekly Progress */}
      <div className="border border-gray-200 rounded-lg p-4">
        <h2 className="text-lg font-medium mb-2">Weekly goal progress tracker</h2>
        <p className="text-sm text-gray-600 mb-4">
          I'm committed to learning 5 days a week on Coursera.
        </p>
        
        <div className="flex justify-between mb-4">
          {days.map((day) => (
            <div key={day} className="w-8 h-8 flex items-center justify-center font-medium">
              {day}
            </div>
          ))}
        </div>
        
        <button className="text-blue-600 font-medium">Edit my goal</button>
      </div>
      
      {/* Course Timeline */}
      <div className="border border-gray-200 rounded-lg p-4">
        <h2 className="text-lg font-medium mb-4">Course timeline</h2>
        
        <div className="flex items-start gap-2 mb-2">
          <Calendar className="h-4 w-4 mt-0.5 text-gray-600" />
          <div>
            <p className="text-sm font-medium">Start date: October 14, 2022</p>
            <p className="text-sm text-gray-600 ml-2">Your next two deadlines</p>
            
            <div className="mt-2 ml-2">
              <p className="text-sm text-blue-600">Logistic Regression</p>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-medium text-orange-600">Overdue</span>
                <span className="text-xs text-gray-600">Programming Assignment</span>
              </div>
              
              <p className="text-sm text-blue-600">Naive Bayes</p>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-orange-600">Overdue</span>
                <span className="text-xs text-gray-600">Programming Assignment</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-start gap-2 mt-4">
          <Calendar className="h-4 w-4 mt-0.5 text-gray-600" />
          <div>
            <p className="text-sm font-medium">Estimated end date: November 13, 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseProgress;
