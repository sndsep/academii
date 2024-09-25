import React from 'react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'

interface Project {
  _id: string;
  name: string;
  description: string;
  techniques_used: string[];
  duration: string;
  grade: string;
  image: string;
  studentId?: {
    name: string;
    avatar: string;
  };
}

interface FeaturedProjectCardProps {
  project: Project;
}

const getGradeColor = (grade: string): string => {
  const gradeMap: { [key: string]: string } = {
    'A': 'bg-green-500',
    'B': 'bg-blue-500',
    'C': 'bg-yellow-500',
    'D': 'bg-orange-500',
    'F': 'bg-red-500'
  }
  return gradeMap[grade.charAt(0)] || 'bg-gray-500'
}

const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({ project }) => {
  const student = project.studentId || { name: 'Unknown Student', avatar: '' };

  return (
    <Card className="flex flex-col h-full overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={project.image || '/placeholder.svg'}
          alt={project.name}
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4">
          <div className="flex justify-between items-start">
            <Badge className={`${getGradeColor(project.grade)} text-white`}>
              Grade: {project.grade}
            </Badge>
            <Badge variant="outline" className="text-white border-white">
              {project.duration}
            </Badge>
          </div>
          <h3 className="text-white text-2xl font-bold leading-tight mt-auto">{project.name}</h3>
        </div>
      </div>
      <CardContent className="flex-grow pt-4">
        <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2">Techniques Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.techniques_used.map((technique, index) => (
              <Badge key={index} variant="secondary">{technique}</Badge>
            ))}
          </div>
        </div>
        <div className="flex items-center mt-2">
          <Avatar className="h-6 w-6 mr-2">
            <AvatarImage src={student.avatar} alt={student.name} />
            <AvatarFallback><User className="h-4 w-4" /></AvatarFallback>
          </Avatar>
          <span className="text-xs">Created by {student.name}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View Project</Button>
      </CardFooter>
    </Card>
  )
}

export default FeaturedProjectCard