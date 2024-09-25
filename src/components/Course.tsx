'use client'

import { useState } from 'react'
import { Book, Calendar, Clock, Code, Gamepad2, GraduationCap, Users } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Header } from './Header'
import { Footer } from './Footer'

interface CourseProps {
  courseData: CourseData
}

interface CourseData {
  id: string;
  title: string;
  description: string;
  // ... otras propiedades del curso ...
}

export function VrUnityCourse({ courseData }: CourseProps) {
  const [progress, setProgress] = useState(0)

  // Ya no necesitamos el useEffect aquí porque los datos del curso se pasan como prop

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">{courseData.title}</h1>
          <p>{courseData.description}</p>
          {/* ... resto del contenido del componente ... */}
        </div>
      </main>
      <Footer />
    </div>
  )
}