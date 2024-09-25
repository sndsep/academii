import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
  title: String,
  category: String,
  icon: String,
});

export default mongoose.models.Course || mongoose.model('Course', CourseSchema);