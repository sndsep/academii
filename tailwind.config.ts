import { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Asegúrate de que esta ruta incluya todos los archivos donde usas clases de Tailwind
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
