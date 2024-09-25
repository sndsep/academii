import React from 'react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, BookOpen } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

interface Professor {
  _id: string;
  name: string;
  email: string;
  specialty: string;
  bio: string;
  years_experience: number;
  avatar?: string; // Hacemos que avatar sea opcional ya que no está en el ejemplo
}

interface ProfessorCardProps {
  professor: Professor;
}

const ProfessorCard: React.FC<ProfessorCardProps> = ({ professor }) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden">
      <div className="relative h-48 w-full bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="absolute inset-0 flex flex-col justify-end items-center p-4">
          <Avatar className="w-24 h-24 border-4 border-white mb-2">
            <AvatarImage src={professor.avatar} alt={professor.name} />
            <AvatarFallback><User className="h-12 w-12" /></AvatarFallback>
          </Avatar>
          <h3 className="text-white text-2xl font-bold text-center">{professor.name}</h3>
        </div>
      </div>
      <CardContent className="flex-grow pt-4">
        <div className="flex justify-between items-center mb-4">
          <Badge variant="secondary">{professor.specialty}</Badge>
        </div>
        <p className="text-sm text-muted-foreground mb-4">{professor.bio}</p>
        <div className="flex items-center mt-2">
          <BookOpen className="w-4 h-4 mr-2" />
          <span className="text-sm">{professor.years_experience} years of experience</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View Profile</Button>
      </CardFooter>
    </Card>
  )
}

export default ProfessorCard