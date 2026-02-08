/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/*.js"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Gantari", "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#543A20",
        background: "#F7F7F2",
        softPurple: "#DEDBE6",
        softBeige: "#EAE3D9",
        white: "#FFFFFF",
      },
    },
  },

  plugins: [],
}

