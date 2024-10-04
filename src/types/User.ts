export interface User {
  id: string;
  nombre: string;
  email: string;
  fechaRegistro: Date;
  rol: 'usuario' | 'admin';
  // Añade más propiedades según sea necesario
}
