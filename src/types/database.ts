export interface Course {
  _id: { $oid: string };
  name: string;
}

interface CourseCategory {
  _id: string;
  name: string;
  // ... otros campos relevantes
}

interface Project {
  _id: string;
  title: string;
  description: string;
  categoryId: string;
  // ... otros campos relevantes
}

interface ProjectCategory {
  _id: string;
  name: string;
  // ... otros campos relevantes
}

interface Review {
  _id: string;
  courseId: string;
  userId: string;
  rating: number;
  comment: string;
  // ... otros campos relevantes
}

interface Staff {
  _id: { $oid: string };
  name: string;
  email: string;
  position: string;
  bio: string;
  password: string;
  isAdmin: boolean;
}

interface Teacher {
  _id: string;
  name: string;
  title: string;
  bio: string;
  avatar: string;
  specialization: string;
}

interface SEO {
  _id: string;
  pageUrl: string;
  title: string;
  description: string;
  // ... otros campos relevantes
}

interface Testimonial {
  _id: string;
  name: string;
  content: string;
  // ... otros campos relevantes
}

interface User {
  _id: { $oid: string };
  name: string;
  email: string;
  password: string;
  role: 'student';
  enrollment_date: { $date: string };
  courses_enrolled: { $oid: string }[];
}

export type {
    CourseCategory,
    Project,
    ProjectCategory,
    Review,
    Staff,
    Teacher,
    SEO,
    Testimonial,
    User,
    Course as CourseType
};