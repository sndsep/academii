import React, { useEffect, useState } from 'react';
import AuthWrapper from '@/components/AuthWrapper';
import CourseList from '@/components/CourseList';
import { Course } from '@/types/database';

export default function BackofficePage() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('/api/courses');
        if (response.ok) {
          const data = await response.json();
          setCourses(data);
        } else {
          console.error('Failed to fetch courses');
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <AuthWrapper>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Backoffice - Gestión de Cursos</h1>
        <CourseList courses={courses} />
      </div>
    </AuthWrapper>
  );
}