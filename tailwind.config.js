/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{html,js}"],
  content: [
    './index.html',    // Adjust the path to match your HTML file
    './styles.css',    // Adjust the path to match your styles.css file
    './output.css',    // Adjust the path to match your output.css file
  ],
  // theme: {
  //   extend: {},
  // },
  theme: {
    backgroundImage: {
      'background': "url('https://img.freepik.com/free-vector/abstract-red-light-lines-pipe-speed-zoom-black-background-technology_1142-12706.jpg?w=1380&t=st=1691602151~exp=1691602751~hmac=ad82b0086660bc2eedc0ff296b6a9ce9e42678701853fbf2102b14338c39d2af')",
    }
  },
  plugins: [],
}