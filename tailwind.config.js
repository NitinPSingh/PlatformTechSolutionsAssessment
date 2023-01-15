module.exports = {
    content: ['./dist/*.html'],
    purge: ['./src/**/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}', './src/index.html'],
    theme: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
       
      }
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }