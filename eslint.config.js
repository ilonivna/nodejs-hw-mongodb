import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  pluginJs.configs.recommended,
  {
    files: ['src/**/*.js'],
    languageOptions: { globals: globals.node },
    rules: {
      semi: 'error',
      'no-unused-vars': 'error',
      'no-undef': 'error',
      "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "argsIgnorePattern": "^_[^_].*$|^_$",
        "varsIgnorePattern": "^_[^_].*$|^_$",
        "caughtErrorsIgnorePattern": "^_[^_].*$|^_$"
      }
    ]
    },
  },
];
