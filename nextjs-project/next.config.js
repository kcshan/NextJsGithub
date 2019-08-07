const withCss = require('@zeit/next-css')
// withLess

if (typeof require != 'undefined') {
  require.extensions['.css'] = file => {}
}

// withLess(withCss())
module.exports = withCss({})