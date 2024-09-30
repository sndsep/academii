import React from 'react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'

interface Project {
  _id: { $oid: string };
  title: string;
  student: string;
  category: string;
  status: string;
  duration: string;
  teamSize: number;
  startDate: { $date: string };
  description: string;
}

interface FeaturedProjectCardProps {
  project: Project;
}

const getStatusColor = (status: string): string => {
  const statusMap: { [key: string]: string } = {
    'Planning': 'bg-blue-500',
    'In Progress': 'bg-yellow-500',
    'Completed': 'bg-green-500',
    'On Hold': 'bg-orange-500'
  }
  return statusMap[status] || 'bg-gray-500'
}

const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({ project }) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={'/placeholder.svg'}
          alt={project.title}
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4">
          <div className="flex justify-between items-start">
            <Badge className={`${getStatusColor(project.status)} text-white`}>
              Status: {project.status}
            </Badge>
            <Badge variant="outline" className="text-white border-white">
              {project.duration}
            </Badge>
          </div>
          <h3 className="text-white text-2xl font-bold leading-tight mt-auto">{project.title}</h3>
        </div>
      </div>
      <CardContent className="flex-grow pt-4">
        <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2">Category:</h4>
          <Badge variant="secondary">{project.category}</Badge>
        </div>
        <div className="flex items-center mt-2">
          <Avatar className="h-6 w-6 mr-2">
            <AvatarFallback><User className="h-4 w-4" /></AvatarFallback>
          </Avatar>
          <span className="text-xs">Created by {project.student}</span>
        </div>
        <div className="mt-2">
          <span className="text-xs">Team Size: {project.teamSize}</span>
        </div>
        <div className="mt-2">
          <span className="text-xs">Start Date: {new Date(project.startDate.$date).toLocaleDateString()}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View Project</Button>
      </CardFooter>
    </Card>
  )
}

export default FeaturedProjectCard