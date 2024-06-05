/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,html,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow : {
        "normal" : "0 0 15px -10px rgba(0 , 0 , 0.75)",
        "chart" : '0 0 15px -10px rgba(0 , 0 , 0 , 0.75)',
      },
      fontFamily : {
        "poppins" : "poppins",
        "poppinsMedium" : "poppins Medium",
        "poppinsSemiBold" : "poppins SemiBold"
      },
    },
  },
  plugins: [],
}

