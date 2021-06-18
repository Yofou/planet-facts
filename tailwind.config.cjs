module.exports = {
  mode: "jit",
  purge: ["./src/**/*.svelte", './safelist.txt'],
  theme: {
    colors: {
      white: '#FFFFFF',
      blue: {
          300: '#419EBB',
          600: '#2D68F0',
          900: '#070724',
      },
      grey: {
          300: '#838391',
          600: '#38384F',
      },
      orange: {
          300: '#EDA249',
          600: '#CD5120',
          900: '#D14C32',
      },
      purple: '#6D2ED5',
      green: '#1EC1A2',
      red: '#D83A34',
  },
    fontFamily: {
        ant: ['Antonio', 'sans-serif'],
        spart: ['Spartan', 'sans-serif'],
    },
    screens: {
      'md': '700px',
      'lg': '1200px',
      '2xl': '1536px'
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};