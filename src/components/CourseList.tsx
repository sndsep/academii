import CourseCard from './CourseCard';
import { Course } from '../types/Course';

interface CourseListProps {
  courses: Course[];
}

export default function CourseList({ courses }: CourseListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard key={course._id} course={course as unknown as Course} variant="full" />
      ))}
    </div>
  );
}