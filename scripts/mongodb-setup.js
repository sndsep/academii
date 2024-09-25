const { MongoMemoryServer } = require('mongodb-memory-server');
const { MongoClient } = require('mongodb');

async function setupDatabase() {
  const mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();

  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Conectado a la base de datos en memoria');

    const db = client.db('vfx_academy');

    // Aquí puedes agregar tu lógica de configuración de la base de datos
    await db.createCollection('courses');
    await db.collection('courses').insertMany([
      { title: 'Course 1', category: 'VFX', icon: 'Film' },
      { title: 'Course 2', category: 'VR', icon: 'Gamepad' },
      { title: 'Course 3', category: 'AR', icon: 'GraduationCap' },
    ]);

    console.log('Configuración de la base de datos completada');
  } catch (error) {
    console.error('Error al configurar la base de datos:', error);
  } finally {
    await client.close();
    await mongod.stop();
  }
}

setupDatabase().catch(console.error);