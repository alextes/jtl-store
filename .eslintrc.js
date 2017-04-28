module.exports = {
  env: {
    jest: true,
  },
  parser: 'babel-eslint',
  extends: 'airbnb-base',
  plugins: [
    'jest',
    'flowtype',
    'promise',
  ],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'key-spacing': [
      'error',
      {
        align: 'value'
      }
    ],
    'no-multi-spaces': 'off',
    'promise/avoid-new': 'warn',
    'promise/catch-or-return': 'error',
    'promise/param-names': 'error',
    'promise/no-promise-in-callback': 'warn',
    'promise/no-callback-in-promise': 'warn'
  }
}
