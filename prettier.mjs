export const base = {
  parser: 'typescript',
  trailingComma: 'all',
  singleQuote: true,
};

export const react = {
  ...base,
  plugins: ['prettier-plugin-tailwindcss'],
};
