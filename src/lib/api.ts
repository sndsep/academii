// Importa los tipos necesarios si los tienes definidos
// import { Course } from '@/types/course'

// Esta es una función de ejemplo que simula la obtención de cursos
// En un caso real, aquí harías una llamada a tu API o base de datos
export async function getCourses() {
  // Simula un retraso de red
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Retorna algunos cursos de ejemplo
  return [
    { id: 1, title: "Introducción a VFX", category: "vfx", icon: "Film" },
    { id: 2, title: "Desarrollo de VR", category: "vr", icon: "Gamepad" },
    { id: 3, title: "Fundamentos de AR", category: "ar", icon: "GraduationCap" },
  ];
}