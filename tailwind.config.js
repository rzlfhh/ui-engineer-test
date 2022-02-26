module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'hoster-blue': '#007DFF',
      'dark-blue': '#0057B2',
      'very-dark-blue': '#22273C',
      'light-blue': '#E0EFFF',
      'orange': '#FF9800',
      'orange-hover': '#ED8E01',
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
      boxShadow: {
        'button-orange': '0 8px 10px rgba(255, 176, 77, 0.32)',
      }
    },
  },
  plugins: [],
}
