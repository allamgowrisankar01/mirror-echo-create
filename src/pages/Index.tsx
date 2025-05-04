
import React from "react";
import CourseHeader from "../components/CourseHeader";
import CourseSidebar from "../components/CourseSidebar";
import CourseContent from "../components/CourseContent";
import CourseProgress from "../components/CourseProgress";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <CourseHeader />
      <div className="container mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-3/4">
          <CourseSidebar />
          <CourseContent />
        </div>
        <div className="w-full lg:w-1/4">
          <CourseProgress />
        </div>
      </div>
    </div>
  );
};

export default Index;
