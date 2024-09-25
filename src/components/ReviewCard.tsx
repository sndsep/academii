import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, User } from 'lucide-react'

interface Review {
  _id: string;
  studentName?: string;  // Hacemos que studentName sea opcional
  courseName?: string;   // Hacemos que courseName sea opcional
  rating: number;
  comment: string;
  studentAvatar?: string;  // Hacemos que studentAvatar sea opcional
}

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const studentName = review.studentName || 'Anonymous Student';
  const courseName = review.courseName || 'Unnamed Course';

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center mb-4">
          <Avatar className="h-10 w-10 mr-4">
            <AvatarImage src={review.studentAvatar} alt={studentName} />
            <AvatarFallback>
              {studentName[0] || <User className="h-6 w-6" />}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{studentName}</p>
            <p className="text-sm text-muted-foreground">{courseName}</p>
          </div>
        </div>
        <div className="flex mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
          ))}
        </div>
        <p className="text-sm">{review.comment}</p>
      </CardContent>
    </Card>
  )
}

export default ReviewCard