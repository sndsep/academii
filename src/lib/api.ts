import { Course } from '@/types/Course';

// Función para obtener todos los cursos
export async function getCourses(): Promise<Course[]> {
  // Implementa la lógica para obtener los cursos
  return [];
}

// Función para obtener un curso específico por ID
export async function getCourseById(id: string): Promise<Course | null> {
  // Aquí iría la lógica para obtener un curso específico
  // Por ahora, retornamos null como ejemplo
  return null;
}

// Puedes agregar más funciones según sea necesario, por ejemplo:
// - createCourse
// - updateCourse
// - deleteCourse
