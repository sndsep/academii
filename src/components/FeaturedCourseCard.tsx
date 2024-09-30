import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Film, Gamepad, GraduationCap, User } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const iconMap = {
  Film: Film,
  Gamepad: Gamepad,
  GraduationCap: GraduationCap,
}

interface Course {
  id: number;
  title: string;
  category: string;
  icon: string;
  description?: string;
  duration?: {
    hours?: number;
    weeks?: number;
  };
  difficulty?: string;
  image?: string;
  professor?: {
    name?: string;
    avatar?: string;
  };
}

interface FeaturedCourseCardProps {
  course: Course;
}

const FeaturedCourseCard: React.FC<FeaturedCourseCardProps> = ({ course }) => {
  const {
    title,
    icon,
    description = "Course description goes here",
    duration,
    difficulty = "Intermediate",
    category,
    image = "/placeholder.svg?height=200&width=300",
    professor
  } = course

  const professorName = professor?.name || "Professor Name"
  const professorAvatar = professor?.avatar || "/placeholder.svg?height=50&width=50"

  const IconComponent = icon ? iconMap[icon] : Film

  // Formatear la duración
  const formattedDuration = duration
    ? `${duration.weeks ? `${duration.weeks} weeks` : ''} ${duration.hours ? `${duration.hours} hours` : ''}`
    : "Duration not specified"

  return (
    <Card className="flex flex-col h-full overflow-hidden">
      <div className="relative h-48 w-full">
        <img 
          src={image} 
          alt={title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
          <div className="text-white text-sm font-semibold mb-2">{category}</div>
          <h3 className="text-white text-2xl font-bold leading-tight">{title}</h3>
        </div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center">
            <IconComponent className="mr-2 h-4 w-4" />
            <span>{difficulty}</span>
            <span className="mx-2">•</span>
            <span>{formattedDuration}</span>
          </div>
          <div className="flex items-center">
            <Avatar className="h-6 w-6 mr-2">
              <AvatarImage src={professorAvatar} alt={professorName} />
              <AvatarFallback><User className="h-4 w-4" /></AvatarFallback>
            </Avatar>
            <span className="text-xs">{professorName}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Learn More</Button>
      </CardFooter>
    </Card>
  )
}

export default FeaturedCourseCard