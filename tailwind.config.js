module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'hoster-blue': '#007DFF',
      'dark-blue': '#0057B2',
      'light-blue': '#E0EFFF',
      'orange': '#FF9800',
      'outline': '#D9DDE3',

      'text-primary': '#29384E',
      'text-secondary': '#546071',
      'text-secondary2': '#A9AFB8',
      'text-white': '#ffffff',
      'text-v-soft-blue': '#F5FAFF',

    },
    fontFamily: {
      nunito: ['Nunito Sans', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        "nature-light": "url('./images/graph-hero.svg')",
      },
    },
  },
  plugins: [],
}
