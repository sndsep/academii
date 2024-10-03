import CourseCard from '@/components/CourseCard';
import { Course } from '@/types/Course'; // Cambiado a mayúscula
import { getCourses } from '@/lib/mongodb'; // Cambiado a getCourses

export default function CoursesPage({ courses }: { courses: Course[] }) {
  return (
    <div className="courses-grid">
      {courses.map((course) => (
        <CourseCard key={course._id} course={course} /> // Cambiado 'id' por '_id'
      ))}
    </div>
  );
}

// Asegúrate de obtener los datos de los cursos, ya sea del lado del servidor o del cliente
export async function getServerSideProps() {
  // Aquí iría tu lógica para obtener los cursos de MongoDB
  const courses = await getCourses(); // Cambiado a getCourses
  
  return {
    props: {
      courses,
    },
  };
}