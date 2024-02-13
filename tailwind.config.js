/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./web/**/*.html', './web/src/**/*.js', 'templates/**/*.twig'], // Add your HTML and JavaScript files here
  theme: {
    extend: {
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
      },
    },
  },
  plugins: [],
}