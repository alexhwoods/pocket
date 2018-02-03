const Config = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  rules: {
    'no-unexpected-multiline': 'error', // no semicolons
    semi: 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
}

module.exports = Config
