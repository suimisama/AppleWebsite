module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['plugin:tailwindcss/recommended', 'prettier'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'max-len': [2, 250],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
      },
    ],
    'object-curly-newline': 0,
  },
};
