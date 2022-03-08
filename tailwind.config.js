module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mplus: ['M PLUS 1p'],
        title: ['Sansita Swashed'],
      },
      backgroundImage: {
        'bgImage': "url('/bgImage.png')",
      },
      colors: {
        background: '#F1F3F4',
        text: '#525252',
      },
    },
    screens: {
      xs: '360px',
      sm: '640px',
      md: '768px',
      lg: '1100px',
    },
  },
  plugins: [],
}
