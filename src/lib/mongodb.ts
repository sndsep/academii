import { MongoClient, Db, Document, OptionalUnlessRequiredId } from 'mongodb';
import {
  Course,
  CourseCategory,
  Project,
  ProjectCategory,
  Review,
  Staff,
  Teacher,
  SEO,
  Testimonial,
  User
} from '../types/database';
// Cambia el nombre de la importación para evitar el conflicto
import UserModel from '@/models/User';

const uri = process.env.MONGODB_URI;
const dbName = 'vfx-academy';

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  if (!uri) {
    throw new Error('Please define the MONGODB_URI environment variable');
  }

  const client = await MongoClient.connect(uri);
  const db = client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

export async function getCollection<T extends Document>(collectionName: string) {
  const { db } = await connectToDatabase();
  return db.collection<T>(collectionName);
}

// Funciones específicas para cada colección
export async function getCourses() {
  return getCollection<Course>('courses');
}

export async function getCourseCategories() {
  return getCollection<CourseCategory>('courseCategories');
}

export async function getProjects() {
  return getCollection<Project>('projects');
}

export async function getProjectCategories() {
  return getCollection<ProjectCategory>('ProjectsCategories');
}

export async function getReviews() {
  return getCollection<Review>('reviews');
}

export async function getStaff() {
  return getCollection<Staff>('staff');
}

export async function getTeachers() {
  return getCollection<Teacher>('teachers');
}

export async function getSEO() {
  return getCollection<SEO>('seo');
}

export async function getTestimonials() {
  return getCollection<Testimonial>('testimonials');
}

export async function getUsers() {
  return getCollection<User>('users');
}

// Funciones para autenticación y manejo de usuarios
export async function createUser(userData: Omit<User, '_id'>) {
  const users = await getUsers();
  const result = await users.insertOne(userData as User);
  return result.insertedId;
}

export async function findUserByEmail(email: string): Promise<User | null> {
  const users = await getUsers();
  const user = await users.findOne({ email });
  return user as User | null;
}


export async function updateUser(userId: string, updateData: Partial<User>) {
  const users = await getUsers();
  const result = await users.updateOne({ _id: userId }, { $set: updateData });
  return result.modifiedCount > 0;
}

// Función genérica para leer documentos de una colección
export async function readDocuments<T extends Document>(collectionName: string, query: object = {}, limit: number = 0) {
  const collection = await getCollection<T>(collectionName);
  return collection.find(query).limit(limit).toArray();
}

// Función genérica para escribir un documento en una colección
export async function writeDocument<T extends Document>(collectionName: string, document: T) {
  const collection = await getCollection<T>(collectionName);
  const result = await collection.insertOne(document as OptionalUnlessRequiredId<T>);
  return result.insertedId;
}