module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "es6": true,
    "mocha": true
  },
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "json",
    "import"
  ],
  "rules": {
    "strict": 0,
    "comma-dangle": ["error", "never"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "import/no-named-default": 0,
    "import/prefer-default-export": 0,
    "quotes": ["error", "double"],
    "max-len": ["error", 110, {
      tabWidth: 2,
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreUrls: true
    }],
    "no-param-reassign": ["error", { "props": false }],
    "react/forbid-prop-types": 0,
    "react/prop-types": 0,
    "react/no-danger": 0,
    "react/prefer-stateless-function": [0, { "ignorePureComponents": true }],
    "semi": [2, "never"],
    "jsx-a11y/anchor-is-valid": ["error", {
      "components": ["Link"],
      "specialLink": ["hrefLeft", "hrefRight", "to"],
      "aspects": ["noHref", "invalidHref", "preferButton"]
    }],
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/img-redundant-alt": 0,
    "jsx-a11y/label-has-for": [0, {
      "components": ["Label"],
      "required": {
        "some": ["nesting", "id"]
      },
      "allowChildren": false
    }],
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "one-var": 0,
    "one-var-declaration-per-line": 0
  }
};