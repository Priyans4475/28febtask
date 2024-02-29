/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // colors:{
    //   gray1:'#B6BDC4'
    // },
    extend: {
      colors:{
        'gray-1':'#B6BDC4',
        'blue-1':'#1B88F4',
        "white-1":"#FBFCFD",
        "blue-2":"#F3F9FF",
        "orange-1":'#FFF4ED'
      }
    },
    
  },
  plugins: [],
}
