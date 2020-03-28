/*
    utilities - js8path utility functions
    utilities.js
*/

import _isNull  from 'lodash/isNull'
import moment from 'moment'

function ageFromIsoDate (isoDate, nowMoment = null) {
  // convert an ISO 8601 date to integer age in years
  if(_isNull(nowMoment)) {
    nowMoment = moment()
  }
  return nowMoment.diff(moment(isoDate), 'years')
}

export default {
  ageFromIsoDate: ageFromIsoDate
}
