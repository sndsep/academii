import React from 'react';
import { Play } from 'lucide-react';

const FeaturedCourses = () => {
  const courses = [
    { title: "Introduction to Nuke", level: "Beginner" },
    { title: "Advanced Compositing", level: "Intermediate" },
    { title: "Houdini Particle Effects", level: "Advanced" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow-md overflow-hidden flex flex-col">
              <img src={`/api/placeholder/400/200?text=${course.title}`} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-xl mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">Level: {course.level}</p>
                <button className="bg-purple-600 text-white font-bold py-2 px-4 rounded-full inline-flex items-center justify-center">
                  View Course <Play className="ml-2" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;