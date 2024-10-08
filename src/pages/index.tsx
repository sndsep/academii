'use client'

import { useState, useEffect } from 'react'
import HomePage from '@/components/Home'  // Cambiado a importación por defecto
import { getCourses } from '@/lib/api'

interface Course {
  id: number;
  title: string;
  category: string;
  icon: string;
}

export default function Home() {
  const [courses, setCourses] = useState<Course[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadCourses() {
      try {
        const loadedCourses = await getCourses()
        setCourses(loadedCourses)
      } catch (error) {
        console.error('Error al cargar los cursos:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadCourses()
  }, [])
  // Eliminamos la prop 'items' si no es necesaria
  return <HomePage courses={courses} />
}