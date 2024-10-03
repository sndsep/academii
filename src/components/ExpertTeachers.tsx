import React from 'react';

const ExpertTeachers = () => {
  const teachers = [
    { name: "Jane Doe", specialty: "Compositing" },
    { name: "John Smith", specialty: "3D Modeling" },
    { name: "Alice Johnson", specialty: "Animation" }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Expert Teachers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden text-center">
              <img src={`/api/placeholder/300/300?text=${teacher.name}`} alt={teacher.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{teacher.name}</h3>
                <p className="text-gray-600">{teacher.specialty} Specialist</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertTeachers;