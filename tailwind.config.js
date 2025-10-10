/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT"; // 1. Importá withMT así

export default withMT({ // 2. Envolvé tu configuración con withMT()
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});