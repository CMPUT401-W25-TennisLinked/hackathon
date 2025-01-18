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
      "sans":['Inter'],
      "mono": ['Menlo','monospace'],
      
    },
  colors:{
    background: 'FFFAFA',
    text: '0D0D0D'
  }},
  },
  plugins: [],
}

