import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { VrUnityCourse } from '@/components/Course'

export default function CoursePage() {
  const router = useRouter()
  const { id } = router.query
  const [courseData, setCourseData] = useState(null)

  useEffect(() => {
    if (id) {
      // Aquí deberías hacer una llamada a tu API para obtener los datos del curso
      // Por ahora, simularemos esto con un setTimeout
      setTimeout(() => {
        setCourseData({
          id: id as string,
          title: `Curso ${id}`,
          description: `Descripción del curso ${id}`,
          // ... otros datos del curso
        })
      }, 1000)
    }
  }, [id])

  if (!courseData) {
    return <div>Cargando...</div>
  }

  return <VrUnityCourse courseData={courseData} />
}