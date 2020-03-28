/*
mocha tests for basic-nodejs-package utilities
test-utilities.js
*/

/* global describe, it */
import moment from 'moment'
import main from '../../src/main.js'
let utils = main.utilities

let chai = require('chai')
let assert = chai.assert

describe('basic-nodejs-package utilities module', function () {
  describe('ageFromIsoDate()', function () {
    let testDob  = '1993-03-28'

    it ('computes zero years age from 1 day after DOB', function () {
      let testAge = utils.ageFromIsoDate(testDob, moment('1993-03-29'))
      assert.equal(testAge, 0)
    })
  })
})

