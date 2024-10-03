"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import FeaturedCourses from './FeaturedCourses';
import ExpertTeachers from './ExpertTeachers';
import StudentProjects from './StudentProjects';
import Testimonials from './Testimonials';
import { Course } from '../types/Course';

const Homepage = () => {
  const [featuredCourses, setFeaturedCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedCourses = async () => {
      try {
        const response = await fetch('/api/featuredCourses');
        if (!response.ok) {
          throw new Error('Failed to fetch featured courses');
        }
        const data: Course[] = await response.json();
        setFeaturedCourses(data);
      } catch (error) {
        console.error('Error fetching featured courses:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeaturedCourses();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Master the Art of Visual Effects</h1>
              <p className="text-xl mb-6">Learn from industry professionals and take your skills to the next level.</p>
              <button className="bg-white text-purple-600 font-bold py-2 px-4 rounded-full inline-flex items-center">
                Get Started <ArrowRight className="ml-2" />
              </button>
            </div>
            <div className="md:w-1/2">
              <img src="/api/placeholder/600/400" alt="VFX Demo Reel" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </header>

      {isLoading ? (
        <div>Cargando cursos destacados...</div>
      ) : (
        <FeaturedCourses courses={featuredCourses} />
      )}

      <ExpertTeachers />
      <StudentProjects />
      <Testimonials />

      {/* Call to Action */}
      <section className="bg-purple-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your VFX Career?</h2>
          <p className="text-xl mb-8">Join our community of visual artists and take your skills to the next level.</p>
          <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
            Enroll Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;