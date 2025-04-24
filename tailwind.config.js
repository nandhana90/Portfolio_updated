/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        fonts: ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        bold: '500',
        extra: '600',
      },
      colors: {
        backgro: '#F9F6E6',
        bag: '#000000',
        text: '#FFD700',
        bagc: '#CBC3E3',
        liv: '#454545',
        redd: '#FF0000',
        black: '#000000',
        whitee: '#fff',
        blue: '#0000FF',
      },
      keyframes: {
        typing: {
          from: { width: '0' },
          to: { width: '78%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'white' },
        },
        bounceCircle: {
          '0%, 100%': { borderRadius: '50%' },
          '50%': { borderRadius: '40%' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        typing: 'typing 3s steps(20, end) forwards, blink 0.75s step-end infinite',
        typingOnce: 'typing 3s steps(8) forwards',
        bounceCircle: 'bounceCircle 2s infinite',
        fadeIn: 'fadeIn 0.5s ease forwards',
      },
    },
  },
  plugins: [],
}
