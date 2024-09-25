import type { AppProps } from 'next/app';
import '../styles/globals.css'; // Asegúrate de que este archivo exista y contenga @tailwind base; @tailwind components; @tailwind utilities;

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;