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
       backgro:'#F9F6E6',
      // bag:'#800080',
       bag:'#000000',
       text:'#FFD700',
       //text:'#FFFFFF',
       
       bagc:'#CBC3E3',
       //liv:'#CF9FFF',
       liv:'#454545',
       redd:'#FF0000',
       black:'#000000',
       whitee:'#fff',
       blue:' #0000FF',
    },
    keyframes: {
      bounceCircle: {
        '0%, 100%': { borderRadius: '50%' },
        '50%': { borderRadius: '40%' },
      },
    },
    animation: {
      bounceCircle: 'bounceCircle 2s infinite',
    },
    animation1: {
      typingOnce: 'typing 3s steps(8) forwards',
    }
  },
  plugins: [],
  
}

