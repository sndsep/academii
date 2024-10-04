import { connectToDatabase } from '../src/lib/mongodb';

async function insertStaffData() {
  try {
    const { db } = await connectToDatabase();
    const staffCollection = db.collection('users');

    const staffMembers = [
      {
        name: 'Ana García',
        role: 'Coordinadora de Cursos',
        image: '/staff/ana-garcia.jpg',
        email: 'ana.garcia@example.com',
        contraseña: 'hashed_password_here',
        rol: 'staff',
      },
      {
        name: 'Carlos Rodríguez',
        role: 'Soporte Técnico',
        image: '/staff/carlos-rodriguez.jpg',
        email: 'carlos.rodriguez@example.com',
        password: 'hashed_password_here',
        rol: 'staff',
      },
      {
        name: 'Laura Martínez',
        role: 'Asistente Administrativa',
        image: '/staff/laura-martinez.jpg',
        email: 'laura.martinez@example.com',
        password: 'hashed_password_here',
        rol: 'staff',
      },
    ];

    const result = await staffCollection.insertMany(staffMembers);
    console.log(`${result.insertedCount} miembros del personal insertados`);
  } catch (error) {
    console.error('Error al insertar datos del personal:', error);
  }
}

insertStaffData();