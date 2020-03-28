/*
mocha tests for basic-nodejs-package Person class
test-utilities.js
*/

/* global describe, it */
import moment from 'moment'
import main from '../../src/main.js'
let Person = main.person

let chai = require('chai')
let assert = chai.assert

describe('basic-nodejs-package Person class', function () {
  describe('person.age()', function () {
    let testPerson  = new Person({
      firstName: 'John',
      lastName: 'Doe',
      dob: '1993-03-28'
    })

    it ('computes zero years age from 1 day after DOB', function () {
      let testAge = testPerson.age(moment('1993-03-29'))
      assert.equal(testAge, 0)
    })
  })
})

