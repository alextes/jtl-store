module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb-base",
  "plugins": [
    "jest"
    "flowtype",
    "promise"
  ],
  "rules": {
    "import/no-extraneous-dependencies": "off",
    "key-spacing": [
      "error",
      {
        "align": "value"
      }
    ],
    "promise/avoid-new": "warn",
    "promise/catch-or-return": "error",
    "promise/param-names": "error",
    "promise/no-promise-in-callback": "warn",
    "promise/no-callback-in-promise": "warn"
  }
}
