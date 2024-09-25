'use client'

import { useState } from 'react'
import { Book, Calendar, Clock, Edit, Film, Gamepad, GraduationCap, MessageSquare, Star, ThumbsUp, User } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export function StudentProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [bio, setBio] = useState("I'm a passionate VFX and VR enthusiast, currently exploring the intersection of visual effects and virtual reality. My goal is to create immersive experiences that blur the line between reality and imagination.")

  const enrolledCourses = [
    { id: 1, title: "Advanced VFX Compositing", progress: 75, icon: Film },
    { id: 2, title: "VR Game Development with Unity", progress: 40, icon: Gamepad },
    { id: 3, title: "3D Modeling for AR Applications", progress: 60, icon: GraduationCap },
  ]

  const gallery = [
    { id: 1, title: "VFX Demo Reel", image: "/placeholder.svg?height=200&width=300" },
    { id: 2, title: "VR Environment Concept", image: "/placeholder.svg?height=200&width=300" },
    { id: 3, title: "Character Model for AR", image: "/placeholder.svg?height=200&width=300" },
    { id: 4, title: "Particle System Study", image: "/placeholder.svg?height=200&width=300" },
  ]

  const comments = [
    { id: 1, author: "Prof. Johnson", content: "Great progress on your VFX project! The particle effects are particularly impressive.", avatar: "/placeholder.svg?height=40&width=40" },
    { id: 2, author: "ClassmateAlex", content: "Your VR environment looks amazing! How did you achieve that lighting effect?", avatar: "/placeholder.svg?height=40&width=40" },
  ]

  const reviews = [
    { id: 1, course: "Advanced VFX Compositing", rating: 5, content: "This course has significantly improved my compositing skills. The instructor's feedback was invaluable." },
    { id: 2, course: "VR Game Development with Unity", rating: 4, content: "Great introduction to VR development. I wish there were more advanced topics covered." },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Student" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Button variant="outline" size="icon" onClick={() => setIsEditing(!isEditing)}>
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
              <CardTitle>Jane Doe</CardTitle>
              <CardDescription>VFX & VR Student</CardDescription>
            </CardHeader>
            <CardContent>
              {isEditing ? (
                <Textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="mt-2"
                  rows={4}
                />
              ) : (
                <p className="text-sm text-muted-foreground">{bio}</p>
              )}
              {isEditing && (
                <Button className="mt-2" onClick={() => setIsEditing(false)}>Save</Button>
              )}
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Enrolled Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {enrolledCourses.map((course) => (
                  <div key={course.id} className="flex items-center space-x-4">
                    <course.icon className="h-6 w-6 text-muted-foreground" />
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {course.title}
                      </p>
                      <Progress value={course.progress} className="w-full" />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {course.progress}%
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:w-2/3">
          <Tabs defaultValue="gallery">
            <TabsList>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
              <TabsTrigger value="comments">Comments</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="gallery">
              <Card>
                <CardHeader>
                  <CardTitle>Project Gallery</CardTitle>
                  <CardDescription>Showcase of recent work and projects</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {gallery.map((item) => (
                      <div key={item.id} className="relative aspect-video overflow-hidden rounded-lg">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-2">
                          <p className="text-white text-sm">{item.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="comments">
              <Card>
                <CardHeader>
                  <CardTitle>Comments</CardTitle>
                  <CardDescription>Feedback and discussions on your work</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {comments.map((comment) => (
                      <div key={comment.id} className="flex space-x-4">
                        <Avatar>
                          <AvatarImage src={comment.avatar} alt={comment.author} />
                          <AvatarFallback>{comment.author[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium">{comment.author}</p>
                          <p className="text-sm text-muted-foreground">{comment.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <form className="flex w-full items-center space-x-2">
                    <Input placeholder="Add a comment..." />
                    <Button type="submit">Post</Button>
                  </form>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="reviews">
              <Card>
                <CardHeader>
                  <CardTitle>Course Reviews</CardTitle>
                  <CardDescription>Your feedback on completed courses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b pb-4 last:border-b-0">
                        <h4 className="font-medium">{review.course}</h4>
                        <div className="flex items-center mt-1">
                          {Array(5).fill(0).map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">{review.content}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}