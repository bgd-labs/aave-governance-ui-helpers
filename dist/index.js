
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./aave-governance-ui-helpers.cjs.production.min.js')
} else {
  module.exports = require('./aave-governance-ui-helpers.cjs.development.js')
}
