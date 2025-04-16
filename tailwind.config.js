/**@type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily:{
      fonts:[ 'Poppins', 'sans-serif'],
    },
    fontWeight:{
      bold:'500',
      extra:'600',


    },
    colors:{
       bag:'#800080',
       
       text:'#FFFFFF',
       
       bagc:'#CBC3E3',
       liv:'#CF9FFF',
      
       black:'#000000',
    },
    
  },
  plugins: [],
}

