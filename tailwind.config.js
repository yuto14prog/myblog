module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgImage': "url('/bgImage.png')",
      },
      colors: {
        background: '#F1F3F4',
      },
    },
  },
  plugins: [],
}
