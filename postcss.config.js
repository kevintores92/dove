export default {
  plugins: {
    // Use the PostCSS plugin package; resolved from @tailwindcss/postcss in CI
    // This will call the plugin function when the package is present.
    // eslint-disable-next-line unicorn/prefer-module
    require('@tailwindcss/postcss')(),
    // eslint-disable-next-line unicorn/prefer-module
    require('autoprefixer')(),
  },
}
