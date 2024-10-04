import React from 'react';
import { Course } from '@/types/database';

interface CourseListProps {
  courses: Course[];
}

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <div key={course._id.$oid}>{course.name}</div>
      ))}
    </div>
  );
};

export default CourseList;