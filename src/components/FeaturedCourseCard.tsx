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
  name?: string;
  icon?: keyof typeof iconMap;
  description?: string;
  duration?: string;
  difficulty?: string;
  category?: string;
  image?: string;
}

interface Professor {
  name?: string;
  avatar?: string;
}

interface FeaturedCourseCardProps {
  course?: Course;
  professor?: Professor;
}

const FeaturedCourseCard: React.FC<FeaturedCourseCardProps> = ({ course = {}, professor = {} }) => {
  const {
    name = "Course Name",
    icon = "Film",
    description = "Course description goes here",
    duration = "8 weeks",
    difficulty = "Intermediate",
    category = "Uncategorized",
    image = "/placeholder.svg?height=200&width=300"
  } = course

  const {
    name: professorName = "Professor Name",
    avatar = "/placeholder.svg?height=50&width=50"
  } = professor

  const IconComponent = icon ? iconMap[icon] : Film

  return (
    <Card className="flex flex-col h-full overflow-hidden">
      <div className="relative h-48 w-full">
        <img 
          src={image} 
          alt={name} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
          <div className="text-white text-sm font-semibold mb-2">{category}</div>
          <h3 className="text-white text-2xl font-bold leading-tight">{name}</h3>
        </div>
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center">
            <IconComponent className="mr-2 h-4 w-4" />
            <span>{difficulty}</span>
            <span className="mx-2">•</span>
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <Avatar className="h-6 w-6 mr-2">
              <AvatarImage src={avatar} alt={professorName} />
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