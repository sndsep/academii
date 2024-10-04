import { connectToDatabase } from '../src/lib/mongodb';
import * as bcrypt from 'bcryptjs';
import { ObjectId } from 'mongodb';

async function updatePassword() {
  try {
    const { db } = await connectToDatabase();
    const userId = '66f2dbf66c31ff1c96d821f9';
    const plainPassword = 'williams';

    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    const result = await db.collection('users').updateOne(
      { _id: new ObjectId(userId) },
      { $set: { password: hashedPassword } }
    );

    if (result.modifiedCount === 1) {
      console.log('Contraseña actualizada exitosamente');
    } else {
      console.log('No se pudo actualizar la contraseña');
    }
  } catch (error) {
    console.error('Error al actualizar la contraseña:', error);
  }
}

updatePassword();