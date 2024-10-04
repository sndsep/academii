import { Db, MongoClient } from 'mongodb';

let cachedDb: Db | null = null;

export async function connectToDatabase(): Promise<{ db: Db }> {
  if (cachedDb) {
    return { db: cachedDb };
  }

  const client = await MongoClient.connect(process.env.MONGODB_URI as string);
  const db = client.db(process.env.MONGODB_DB as string);

  cachedDb = db;
  return { db };
}

export async function getCourses() {
  // Implementa la lógica para obtener los cursos de la base de datos
}