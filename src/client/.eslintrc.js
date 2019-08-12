module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb',
  globals: {
    describe: false,
    jest: false,
    it: false,
    expect: false,
    beforeEach: false,
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  plugins: ['react'],
  rules: {
    'eslint linebreak-style': [0, 'error', 'windows'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-underscore-dangle': [
      'error',
      { allow: ['__REDUX_DEVTOOLS_EXTENSION__'] },
    ],
    'react/require-default-props': 'off',
    'react/no-array-index-key': 'off',
    'no-cond-assign': 0,
    'arrow-pens': 0,
    "one-var": 0,
    'no-param-reassign': [2, { props: false }],
    'jsx-a11y/label-has-for': [
      2,
      {
        required: {
          every: ['id'],
        },
      },
    ],
    'react/button-has-type': 'off',
    'react/destructuring-assignment': 'off',
    'react/no-did-update-set-state': 0,
    'no-shadow': [
      'error',
      {
        allow: [
          'setVisibility',
          'addNewPresetsFromDB',
          'addNewPresetFromInput',
          'setPresetValue',
        ],
      },
    ],
    "import/prefer-default-export": "off",
    'react/no-did-update-set-state': 0,
    "import/no-named-as-default": 0,
    "react/no-access-state-in-setstate": 0,
    "no-unused-expressions": ["error", { "allowTernary": true, "allowShortCircuit": true }]
  },
};
