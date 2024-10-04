const bcrypt = require('bcryptjs');

const password = 'tu_contraseña_aqui'; // Reemplaza esto con la contraseña que quieres hashear

bcrypt.hash(password, 10, (err, hash) => {
  if (err) {
    console.error('Error al generar el hash:', err);
  } else {
    console.log('Hash generado:', hash);
  }
});
