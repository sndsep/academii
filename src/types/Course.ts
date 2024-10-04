import { Teacher } from './Teacher';

export interface Course {
  _id: string;
  name: string;
  description: string;
  coverImage?: string;
  difficulty: string;
  duration: {
    weeks: number;
    hours: number;
  };
  category: string;
  teacher: Teacher;
}