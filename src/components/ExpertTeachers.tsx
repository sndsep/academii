'use client';

import React from 'react';
import TeacherCard from './TeacherCard';

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
            <TeacherCard key={index} name={teacher.name} specialty={teacher.specialty} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertTeachers;