const postcssPresetEnv = require('postcss-preset-env');

const opts = {
  stage: 0,
  'nesting-rules': true
}

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
