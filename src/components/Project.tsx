'use client'

import { useState } from 'react'
import { Calendar, Clock, Film, Tv, Camera, Palette, User, Zap, Search } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: "Sci-Fi Short Film VFX",
    student: "Alice Johnson",
    category: "film",
    status: "In Progress",
    duration: "8 weeks",
    teamSize: 3,
    startDate: "July 1, 2023",
    description: "Creating futuristic city landscapes and alien creatures for a short sci-fi film.",
  },
  {
    id: 2,
    title: "TV Series Matte Painting",
    student: "Bob Smith",
    category: "tv",
    status: "Planning",
    duration: "6 weeks",
    teamSize: 2,
    startDate: "August 15, 2023",
    description: "Developing matte paintings for a historical drama TV series set in ancient Rome.",
  },
  {
    id: 3,
    title: "Character Animation Reel",
    student: "Charlie Brown",
    category: "animation",
    status: "Testing",
    duration: "10 weeks",
    teamSize: 1,
    startDate: "June 1, 2023",
    description: "Creating a demo reel showcasing various character animations and expressions.",
  },
  {
    id: 4,
    title: "Commercial CGI Product Shots",
    student: "Diana Prince",
    category: "commercial",
    status: "In Progress",
    duration: "4 weeks",
    teamSize: 2,
    startDate: "May 1, 2023",
    description: "Producing photorealistic 3D renders of products for a major advertising campaign.",
  },
  {
    id: 5,
    title: "Video Game Cinematic",
    student: "Ethan Hunt",
    category: "game",
    status: "Planning",
    duration: "12 weeks",
    teamSize: 4,
    startDate: "September 1, 2023",
    description: "Creating a high-quality cinematic intro for an upcoming AAA video game.",
  },
  {
    id: 6,
    title: "Music Video VFX Integration",
    student: "Fiona Gallagher",
    category: "music",
    status: "In Progress",
    duration: "5 weeks",
    teamSize: 2,
    startDate: "July 15, 2023",
    description: "Integrating complex visual effects into a surrealist music video.",
  },
]

export function VfxAcademyProjects() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")

  const filteredProjects = projects.filter(project => 
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedStatus === "all" || project.status.toLowerCase() === selectedStatus.toLowerCase())
  )

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "film":
        return Film
      case "tv":
        return Tv
      case "animation":
        return Zap
      case "commercial":
        return Camera
      case "game":
        return Palette
      case "music":
        return Tv
      default:
        return Film
    }
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "in progress":
        return "bg-blue-100 text-blue-800"
      case "planning":
        return "bg-yellow-100 text-yellow-800"
      case "testing":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Film className="h-6 w-6" />
          <span className="sr-only">VFX Academy</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Courses
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  VFX Academy Project Catalog
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Explore innovative VFX projects created by our talented students. From film to games, witness the future of visual effects.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Search projects..."
                    type="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Button type="submit">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="planning">Planning</SelectItem>
                  <SelectItem value="in progress">In Progress</SelectItem>
                  <SelectItem value="testing">Testing</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="film">Film</TabsTrigger>
                <TabsTrigger value="tv">TV</TabsTrigger>
                <TabsTrigger value="animation">Animation</TabsTrigger>
                <TabsTrigger value="commercial">Commercial</TabsTrigger>
                <TabsTrigger value="game">Game</TabsTrigger>
                <TabsTrigger value="music">Music</TabsTrigger>
              </TabsList>
              {["all", "film", "tv", "animation", "commercial", "game", "music"].map((category) => (
                <TabsContent key={category} value={category}>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects
                      .filter(project => category === "all" || project.category === category)
                      .map(project => {
                        const CategoryIcon = getCategoryIcon(project.category)
                        return (
                          <Card key={project.id} className="flex flex-col">
                            <CardHeader>
                              <div className="flex justify-between items-start">
                                <div className="space-y-1">
                                  <CardTitle className="flex items-center">
                                    <CategoryIcon className="mr-2 h-5 w-5" />
                                    {project.title}
                                  </CardTitle>
                                  <CardDescription>{project.student}</CardDescription>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="flex-grow">
                              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                              <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                                <span className="flex items-center">
                                  <Clock className="mr-1 h-4 w-4" />
                                  {project.duration}
                                </span>
                                <span className="flex items-center">
                                  <User className="mr-1 h-4 w-4" />
                                  Team of {project.teamSize}
                                </span>
                                <span className="flex items-center">
                                  <Calendar className="mr-1 h-4 w-4" />
                                  Starts {project.startDate}
                                </span>
                              </div>
                            </CardContent>
                            <CardFooter className="flex justify-between items-center">
                              <Badge className={`${getStatusColor(project.status)} font-semibold`}>
                                {project.status}
                              </Badge>
                              <Button variant="outline">View Details</Button>
                            </CardFooter>
                          </Card>
                        )
                      })}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </main>
    </div>
  )
}