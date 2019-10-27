/* eslint-disable */

// A dummy Webpack config so that Jetbrains apps can infer
// Webpack aliases.

module.exports = {
  resolve: {
    // for WebStorm
    alias: {
      '~': path.resolve(__dirname),
      '@': path.resolve(__dirname),
    },
  },
}
