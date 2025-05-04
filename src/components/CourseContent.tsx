
import React, { useState } from "react";
import { ChevronDown, ChevronUp, Check } from "lucide-react";

const CourseContent = () => {
  const [expandedModule, setExpandedModule] = useState("sentiment");
  const [expandedLecture, setExpandedLecture] = useState("logistic");
  
  return (
    <div className="border border-gray-200 rounded-lg">
      {/* Info Banner */}
      <div className="bg-blue-50 p-4 border-b border-gray-200 flex items-start gap-2">
        <div className="text-blue-600 mt-1">ℹ️</div>
        <div>
          <p>
            Like this course? Become an expert by joining the{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Natural Language Processing Specialization
            </a>
            .
          </p>
        </div>
        <button className="text-gray-500 font-bold">×</button>
      </div>
      
      {/* Module */}
      <div>
        <button 
          className="w-full flex items-center justify-between p-4 border-b border-gray-200"
          onClick={() => setExpandedModule(expandedModule === "sentiment" ? "" : "sentiment")}
        >
          <div className="flex items-center gap-2">
            {expandedModule === "sentiment" ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
            <span className="font-medium">Sentiment Analysis with Logistic Regression</span>
          </div>
        </button>
        
        {expandedModule === "sentiment" && (
          <div className="p-4 border-b border-gray-200">
            <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-1">
                <span className="text-gray-500">🕒</span> 
                56 min of videos left
              </div>
              <div className="flex items-center gap-1">
                <span className="text-gray-500">📄</span> 
                38 min of readings left
              </div>
              <div className="flex items-center gap-1">
                <span className="text-gray-500">📝</span> 
                1 graded assessment left
              </div>
            </div>
            
            <p className="mb-4">
              Learn to extract features from text into numerical vectors, then build a binary classifier for tweets using a logistic regression!
            </p>
            
            <button className="text-blue-600 text-sm flex items-center gap-1">
              <ChevronDown className="h-4 w-4" /> Show Learning Objectives
            </button>
            
            {/* Lecture */}
            <div className="mt-4">
              <button 
                className="w-full flex items-center justify-between py-2"
                onClick={() => setExpandedLecture(expandedLecture === "logistic" ? "" : "logistic")}
              >
                <div className="flex items-center gap-2">
                  {expandedLecture === "logistic" ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                  <span className="font-medium">Lecture: Logistic Regression</span>
                </div>
              </button>
              
              {expandedLecture === "logistic" && (
                <div className="pl-7 space-y-4 pt-4">
                  {[
                    { title: "Welcome to the NLP Specialization", type: "Video", duration: "4 min" },
                    { title: "Welcome to Course 1", type: "Video", duration: "1 min" },
                    { title: "Acknowledgement - Ken Church", type: "Reading", duration: "10 min" },
                    { title: "Week Introduction", type: "Video", duration: "35 sec" },
                    { title: "Supervised ML & Sentiment Analysis", type: "Video", duration: "2 min" },
                    { title: "Supervised ML & Sentiment Analysis", type: "Reading", duration: "2 min" },
                    { title: "Vocabulary & Feature Extraction", type: "Video", duration: "2 min" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="bg-green-600 text-white rounded-full p-1 mt-0.5">
                        <Check className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-gray-600">
                          {item.type} • {item.duration}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseContent;
