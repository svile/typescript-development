import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import tailwind from 'eslint-plugin-tailwindcss';

export const base = [
  {
    ignores: [
      '**/public/*',
      '**/dist/*',
      '**/build/*',
      '**/tests/*',
      'tsconfig.json',
      '*.d.ts',
      '*.config.js',
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
];

export const react = [
  ...base,
  reactPlugin.configs.flat.recommended,
  jsxA11y.flatConfigs.recommended,
  ...tailwind.configs['flat/recommended'],
  { settings: { react: { version: 'detect' } } },
];

export const mobile = [
  ...react,
  {
    rules: {
      // Valid only for react Web, not Native
      'react/react-in-jsx-scope': 'off',
    },
  },
];
