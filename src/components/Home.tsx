'use client'

import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import dynamic from 'next/dynamic'
import FeaturedProjectCard from './FeaturedProjectCard'
import StaffCard from './StaffCard'
import ProfessorCard from './ProfesorCard'
import ReviewCard from './ReviewCard'

const FeaturedCourses = dynamic(() => import('./FeaturedCourses'), { 
  loading: () => <p>Loading courses...</p>,
  ssr: false 
})

// Hero Section Component
const HeroSection: React.FC = () => (
  <section className="py-20 bg-gray-100">
    <div className="container">
      <h1 className="text-4xl font-bold text-center mb-4">Welcome to VFX Academy</h1>
      <p className="text-xl text-center">Learn the latest techniques in visual effects and animation</p>
    </div>
  </section>
)

interface AcademyHomePageProps {
  courses: any[];
  projects: any[];
  professors: any[];
  staff: any[];
  reviews: any[];
  students: any[];
}

const AcademyHomePage: React.FC<AcademyHomePageProps> = ({ courses, projects, professors, staff, reviews, students }) => {
  // Link courses with professors
  const coursesWithProfessors = courses.map(course => ({
    ...course,
    professor: professors.find(prof => prof._id === course.professorId)
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedCourses courses={coursesWithProfessors.slice(0, 9)} />
        
        {/* Featured Projects Section */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-10">Featured Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.slice(0, 6).map((project, index) => (
                <FeaturedProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Professors Section */}
        <section className="py-20">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-10">Our Professors</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {professors.slice(0, 9).map((professor, index) => (
                <ProfessorCard key={index} professor={professor} />
              ))}
            </div>
          </div>
        </section>

        {/* Staff Section */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-10">Our Staff</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {staff && staff.length > 0 ? (
                staff.slice(0, 6).map((staffMember, index) => (
                  <StaffCard key={index} staffMember={staffMember} />
                ))
              ) : (
                <div className="col-span-full text-center">
                  <p>No staff members available at the moment.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-10">What Our Students Say</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {reviews.slice(0, 6).map((review, index) => (
                <ReviewCard key={index} review={review} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default AcademyHomePage