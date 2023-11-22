/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    container:{
      padding:{
        DEFAULT: '15px'
      }
    },
    screens:{
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1330px',
    },
    extend: {
      colors:{
        primary :'#403647',
        secondary :'#808080',
        accent: {
          DEFAULT : '#701CCF' ,
          secondary: '#5618BC' ,
          tertiary: "#9E90CD" ,
        },
        grey: "#e8f0f1"
      },
      fontFamily: {
        primary : 'Poppins'
      },
      boxShadow: {
        custom1 : '0px 2px 40px 0px rgba(8, 70, 78, 0.08)' ,
        custom2 : '0px 0px 30px 0px rgba(8, 73, 81, 0.06)' ,
      },
      backgroundImage: {
        services : 'url(./assets/1.jpg)' ,
        testimonials : 'url(../../assets/img/testimonials/bg.svg)',
        departaments : 'url(../../assets/img/departaments/bg.svg)' ,
        quoteLeft : 'url(../../assets/img/testimonials/quote-left.svg)' ,
        quoteRight : 'url(../../assets/img/testimonials/quote-right.svg)' ,
        imagenFondo : "url(../../assets/1.jpg')" ,
        imagenSemana : "url(../../assets/2.jpg')" ,
      },
    },
  },
  plugins: [],
}