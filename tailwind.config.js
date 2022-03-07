module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mplus: ['M PLUS 1p'],
      },
      backgroundImage: {
        'bgImage': "url('/bgImage.png')",
      },
      colors: {
        background: '#F1F3F4',
        text: '#525252',
      },
    },
  },
  plugins: [],
}
