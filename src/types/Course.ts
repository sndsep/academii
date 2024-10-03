export interface Course {
  _id: string;
  name: string;
  description: string;
  difficulty: string;
  price: number;
  coverImage: string;
  enrolledStudents: number;
  instructor: {
    name: string;
    title: string;
    bio: string;
    avatar: string;
  };
  duration: {
    hours: number;
    weeks: number;
  };
  features: string[];
  category: string;
}