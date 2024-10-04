import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;
let cachedDb: Db | null = null;

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri!, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri!, options);
  clientPromise = client.connect();
}

export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
  if (cachedDb) {
    return { client: await clientPromise, db: cachedDb };
  }

  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB as string);
  cachedDb = db;
  return { client, db };
}

export async function fetchCoursesFromDB() {
  // Implementación de la función
}

export async function getCourses() {
  // Implementación de la función getCourses
}