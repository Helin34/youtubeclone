// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gri:"bg-[#272727]",
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
