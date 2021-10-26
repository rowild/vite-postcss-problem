// import postcssPresetEnv from 'postcss-preset-env'

// export default {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//     postcssPresetEnv({
//       stage: 0,
//       'nesting-rules': true
//     })
//   },
// }


const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    postcssPresetEnv({
      stage: 0,
      'nesting-rules': true
    })
  },
}
