const mongoose = require('mongoose');
const { Staff } = require('../models');

async function initializeDatabase() {
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const staffCount = await Staff.countDocuments();
  if (staffCount === 0) {
    console.log('Inicializando datos de personal...');
    await Staff.insertMany([
      { name: 'John Doe', email: 'john@example.com', position: 'Director', bio: 'Experienced director with 10 years in VFX.' },
      { name: 'Jane Smith', email: 'jane@example.com', position: 'Administrator', bio: 'Efficient administrator with a background in project management.' },
      // Agrega más miembros del personal según sea necesario
    ]);
    console.log('Datos de personal inicializados.');
  } else {
    console.log('La colección de personal ya tiene datos.');
  }

  await mongoose.disconnect();
}

initializeDatabase().catch(console.error);