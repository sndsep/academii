import React from 'react';

const StudentProjects = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Student Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((project) => (
            <div key={project} className="relative group">
              <img src={`/api/placeholder/400/300?text=Project ${project}`} alt={`Project ${project}`} className="w-full h-64 object-cover rounded-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white text-purple-600 font-bold py-2 px-4 rounded-full">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentProjects;