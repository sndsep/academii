"use client";
import React from 'react';
import CourseCard from './CourseCard';
export default function FeaturedCourses({ courses }) {
    console.log('Cursos recibidos:', courses);
    return (<section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (<CourseCard key={course._id || course.name} course={course} variant="featured"/>))}
        </div>
      </div>
    </section>);
}
