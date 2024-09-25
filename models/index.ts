import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
  // Otros campos relevantes para los estudiantes
});

const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  icon: String,
  professorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Professor' },
  // Otros campos relevantes para los cursos
});

const ProjectSchema = new mongoose.Schema({
  name: String,
  description: String,
  techniques_used: [String],
  duration: String,
  grade: String,
  image: String,
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  // Eliminamos el campo 'student' ya que usaremos 'studentId' para la relación
});

const ProfessorSchema = new mongoose.Schema({
  name: String,
  specialty: String,
  bio: String,
  yearsExperience: Number,
  avatar: String,
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  rating: Number,
  // Otros campos relevantes para los profesores
});

const ReviewSchema = new mongoose.Schema({
  studentName: String,
  courseName: String,
  rating: Number,
  comment: String,
  studentAvatar: String,
  // Otros campos relevantes para las reseñas
});

const StaffSchema = new mongoose.Schema({
  name: String,
  email: String,
  position: String,
  bio: String,
  // Otros campos relevantes para el personal
});

export const User = mongoose.models.User || mongoose.model('User', UserSchema);
export const Course = mongoose.models.Course || mongoose.model('Course', CourseSchema);
export const Project = mongoose.models.Project || mongoose.model('Project', ProjectSchema);
export const Professor = mongoose.models.Professor || mongoose.model('Professor', ProfessorSchema);
export const Review = mongoose.models.Review || mongoose.model('Review', ReviewSchema);
export const Staff = mongoose.models.Staff || mongoose.model('Staff', StaffSchema, 'staff');