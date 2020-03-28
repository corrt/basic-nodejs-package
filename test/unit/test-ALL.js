/*
run all mocha unit tests for basic-nodejs-package
test-ALL.js
*/

/* global describe */

// es6-promise polyfill needed for IE and other platforms without native ES6 Promise
import es6Promise from 'es6-promise'
es6Promise.polyfill()

describe('All basic-nodejs-package unit tests', function () {
  require('./test-utilities.js')
  require('./test-person.js')
})
