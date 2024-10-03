import Homepage from '../components/Homepage';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Homepage />
      {/* Ejemplo de uso del placeholder */}
      <Image
        src="/placeholder.svg"
        alt="Imagen de marcador de posición"
        width={500}
        height={300}
      />
      {/* Puedes agregar más contenido aquí */}
    </div>
  );
}