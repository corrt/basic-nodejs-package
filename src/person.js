/*
    person - an example Person class
    person.js
*/

import schema from './schema.js'
import utilities from './utilities.js'

import Ajv from 'ajv'
let ajv = new Ajv({schemas: schema.schemaList})
let personDataValidator = ajv.compile(schema.schemaDefs.app.person)

class Person {
  constructor (personData) {
    if (!personDataValidator(persobData)) {
      throw 'Validation Error: invalid person data'
    }
    this.firstName = personData.firstName
    this.lastName = personData.lastName
    this.dob = personData.dob
  }

  personData () {
    let thisStation = this
    return {
      firstName: thisStation.firstName,
      lastName: thisStation.lastName,
      dob: thisStation.dob
    }
  }

  age (nowMoment = null) {
    let thisStation = this
    return utilities.ageFromIsoDate(thisStation.dob, nowMoment)
  }
}

export default Person
