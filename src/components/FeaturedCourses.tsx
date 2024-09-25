import React from 'react'
import FeaturedCourseCard from './FeaturedCourseCard'

interface FeaturedCoursesProps {
  courses: any[];
}

const FeaturedCourses: React.FC<FeaturedCoursesProps> = ({ courses }) => {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-10">Cursos Destacados</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <FeaturedCourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedCourses