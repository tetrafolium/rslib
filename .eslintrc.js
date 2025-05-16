module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
      project: './tsconfig.json',
    },
    plugins: ['@typescript-eslint', 'import', 'react'],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'plugin:react/recommended',
    ],
    settings: {
      'import/resolver': {
        typescript: {},
      },
      react: {
        version: 'detect',
      },
    },
    ignorePatterns: [
      '**/.rslib/*',
      './tests/integration/**/*/src/*',
      './tests/e2e/react-component/public/umd/*',
      'node_modules',
      'dist',
      'build',
    ],
    rules: {
      // Style
      'quotes': ['error', 'single'],
      'indent': ['error', 2, { 'SwitchCase': 1 }],
      'semi': ['error', 'always'],
      
      // Typescript
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-confusing-void-expression': 'off',
      
      // Performance
      'no-restricted-syntax': ['error', {
        selector: 'UnaryExpression[operator="delete"]',
        message: 'Use alternative methods to remove properties instead of the delete operator',
      }],
      'no-delete-var': 'error',
      
      // Import organization
      'import/order': ['error', {
        'groups': [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'index',
        ],
        'newlines-between': 'always',
        'alphabetize': { 
          'order': 'asc',
          'caseInsensitive': true 
        }
      }],
      
      // Filename convention (similar to Biome's useFilenamingConvention)
      'filenames/match-regex': ['error', '^([a-z][a-z0-9]*)([A-Z][a-z0-9]*)*$|^[A-Z][a-zA-Z0-9]*$|^index(\\..*)?$', true],
    }
  };