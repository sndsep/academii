import Image from 'next/image';

interface PlaceholderProps {
  width: number;
  height: number;
  alt?: string;
}

export default function Placeholder({ width, height, alt = 'Imagen de marcador de posición' }: PlaceholderProps) {
  return (
    <Image
      src="/placeholder.svg"
      alt={alt}
      width={width}
      height={height}
    />
  );
}