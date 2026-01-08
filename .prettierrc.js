/** @type {import('prettier').Config} */
const config = {
  singleQuote: true,
  endOfLine: 'auto',
  trailingComma: 'es5',
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindStylesheet: './global.css',
};

module.exports = config;
