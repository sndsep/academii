import { MongoClient, ObjectId } from 'mongodb';
const uri = process.env.MONGODB_URI;
const dbName = 'vfx-academy';
let cachedClient = null;
let cachedDb = null;
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
export async function getCollection(collectionName) {
    const { db } = await connectToDatabase();
    return db.collection(collectionName);
}
// Funciones específicas para cada colección
export async function getCourses() {
    return getCollection('courses');
}
export async function getCourseCategories() {
    return getCollection('courseCategories');
}
export async function getProjects() {
    return getCollection('projects');
}
export async function getProjectCategories() {
    return getCollection('ProjectsCategories');
}
export async function getReviews() {
    return getCollection('reviews');
}
export async function getStaff() {
    return getCollection('staff');
}
export async function getTeachers() {
    return getCollection('teachers');
}
export async function getSEO() {
    return getCollection('seo');
}
export async function getTestimonials() {
    return getCollection('testimonials');
}
export async function getUsers() {
    return getCollection('users');
}
// Funciones para autenticación y manejo de usuarios
export async function createUser(userData) {
    const users = await getUsers();
    const result = await users.insertOne(userData);
    return result.insertedId;
}
export async function findUserByEmail(email) {
    const users = await getUsers();
    const user = await users.findOne({ email });
    return user;
}
export async function updateUser(userId, updateData) {
    const usuarios = await getUsers();
    const resultado = await usuarios.updateOne({ _id: new ObjectId(userId) }, { $set: updateData });
    return resultado.modifiedCount > 0;
}
// Función genérica para leer documentos de una colección
export async function readDocuments(collectionName, query = {}, limit = 0) {
    const collection = await getCollection(collectionName);
    return collection.find(query).limit(limit).toArray();
}
// Función genérica para escribir un documento en una colección
export async function writeDocument(collectionName, document) {
    const collection = await getCollection(collectionName);
    const result = await collection.insertOne(document);
    return result.insertedId;
}
export async function findStaffByEmail(email) {
    const { db } = await connectToDatabase();
    return db.collection('staff').findOne({ email });
}
