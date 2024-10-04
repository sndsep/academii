import { MongoClient } from 'mongodb';
import bcrypt from 'bcrypt';

// Usa una variable de entorno para la URL de MongoDB o usa el valor por defecto
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const dbName = 'tuBaseDeDatos';

const saltRounds = 10;

async function hashPasswords() {
  const client = new MongoClient(url, {
    serverSelectionTimeoutMS: 5000 // Tiempo de espera para la selección del servidor
  });

  try {
    console.log('Intentando conectar a MongoDB...');
    await client.connect();
    console.log('Conectado correctamente al servidor');

    const db = client.db(dbName);
    const collection = db.collection('users');

    console.log('Buscando usuarios...');
    const users = await collection.find({}).toArray();
    console.log(`Encontrados ${users.length} usuarios`);

    for (let user of users) {
      if (user.password && !user.password.startsWith('$2b$')) {
        console.log(`Hasheando password para el usuario: ${user.username}`);
        const hashedPassword = await bcrypt.hash(user.password, saltRounds);
        await collection.updateOne(
          { _id: user._id },
          { $set: { password: hashedPassword } }
        );
        console.log(`Password actualizado para el usuario: ${user.username}`);
      }
    }

  } catch (err) {
    console.error('Error al conectar o procesar datos:');
    console.error(err);
  } finally {
    console.log('Cerrando conexión...');
    await client.close();
    console.log('Conexión cerrada');
  }
}

hashPasswords();