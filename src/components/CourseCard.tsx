import React from 'react';
import Image from 'next/image';
import { Course } from '../types/Course';
import TeacherProfile from './TeacherProfile';
import { Teacher } from '../types/Teacher';

interface CourseCardProps {
  course: Course;
  variant?: 'featured' | 'full';
}

export default function CourseCard({ course, variant = 'full' }: CourseCardProps) {
  const { name, description, coverImage, difficulty, duration, category, teacher } = course;
  
  const imageSrc = coverImage || `/api/placeholder?width=600&height=400&text=${encodeURIComponent(name)}`;

  const teacherWithDefaults: Teacher = {
    name: teacher.name,
    title: teacher.title || '',
    bio: teacher.bio || '',
    avatar: teacher.avatar || '',
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative w-full h-48">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2">{name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">{difficulty}</span>
          <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">{`${duration.weeks} weeks / ${duration.hours} hours`}</span>
          <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded">{category}</span>
        </div>
        <TeacherProfile teacher={teacherWithDefaults} />
      </div>
    </div>
  );
}