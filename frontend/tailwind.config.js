/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',],
  corePlugins:{
    preflight: true,
  }, 
  theme: {
    extend: {fontFamily:{
      "sans":['Graphik Web'],
      "mono": ['Menlo','monospace'],
    }},
  },
  plugins: [],
}

