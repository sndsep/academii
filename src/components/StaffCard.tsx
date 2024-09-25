import React from 'react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, Briefcase } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

interface StaffMember {
  _id: string;
  name: string;
  email: string;
  position: string;
  bio: string;
  avatar?: string;
}

interface StaffCardProps {
  staffMember: StaffMember;
}

const StaffCard: React.FC<StaffCardProps> = ({ staffMember }) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden">
      <div className="relative h-48 w-full bg-gradient-to-r from-green-500 to-teal-500">
        <div className="absolute inset-0 flex flex-col justify-end items-center p-4">
          <Avatar className="w-24 h-24 border-4 border-white mb-2">
            <AvatarImage src={staffMember.avatar} alt={staffMember.name} />
            <AvatarFallback><User className="h-12 w-12" /></AvatarFallback>
          </Avatar>
          <h3 className="text-white text-2xl font-bold text-center">{staffMember.name}</h3>
        </div>
      </div>
      <CardContent className="flex-grow pt-4">
        <div className="flex justify-between items-center mb-4">
          <Badge variant="secondary">{staffMember.position}</Badge>
        </div>
        <p className="text-sm text-muted-foreground mb-4">{staffMember.bio}</p>
        <div className="flex items-center mt-2">
          <Briefcase className="w-4 h-4 mr-2" />
          <span className="text-sm">{staffMember.position}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View Profile</Button>
      </CardFooter>
    </Card>
  )
}

export default StaffCard