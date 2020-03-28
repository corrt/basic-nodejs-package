/*
  Schema definitions (structured index and list)
  schema.js
*/

import _forOwn from 'lodash/forOwn'

let stringPatterns = {
  // FixMe: needs tests
  isoDate: '^\\d{4}\\-\\d{2}\\-\\d{2}$',
}

let schemaIdPrefix = 'http://schemas.corrt.com/basic-nodejs-package'

// compilation of all individual schemas
let schemaDefs = {
  general: {
    // FixMe: needs tests
    isoDateString: {
      $schema: 'http://json-schema.org/draft-07/schema#',
      $id: schemaIdPrefix + '/general/isoDateString.json',
      title: 'ISO Date String',
      description: 'A YYYY-MM-DD date string',
      type: 'string',
      pattern: stringPatterns.isoDate
    }
  },
  app: {
    person: {
      $schema: 'http://json-schema.org/draft-07/schema#',
      $id: schemaIdPrefix + '/reports/person.json',
      title: 'Person',
      description: 'A person (sample schema object)',
      type: 'object',
      properties: {
        firstName: {
          title: 'First Name',
          description: 'The first (given) name of the person',
          type: 'string'
        },
        lastName: {
          title: 'Last Name',
          description: 'The last (family) name of the person',
          type: 'string'
        },
        dob: {
          title: 'DOB',
          description: 'Date of Birth',
          type: {$ref: schemaIdPrefix + '/general/isoDateString.json'}
        },
      },
      required: ['firstName', 'lastName', 'dob']
    }
  }
}

let schemaList = []
_forOwn(schemaDefs, function (value1) {
  if (value1.$schema) {
    schemaList.push(value1)
  } else {
    _forOwn(value1, function (value2) {
      if (value2.$schema) {
        schemaList.push(value2)
      }
    })
  }
})

export default {
  stringPatterns: stringPatterns,
  schemaIdPrefix: schemaIdPrefix,
  schemaDefs: schemaDefs,
  schemaList: schemaList
}
