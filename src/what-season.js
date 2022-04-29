const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(s) {
  if( (s instanceof Date) === false) {
    throw new Error("Invalid date!");
    return false
  }
  if (typeof s === "undefined") {
    return 'Unable to determine the time of year!'
  }
  if (String(s) === "Invalid Date") {
    throw new Error("Invalid date!")
    return false
  }
  let m = s.getMonth()


  if (m < 2 && m >= 0) {
    return "winter"
  } else {
    if (m >= 2 && m <= 4) {
      return "spring"
    } else {
      if (m >= 5 && m <= 7) {
        return "summer"
      } else {
        if (m >= 8 && m <= 10) {
          return "autumn"
        } else {
          if (m >= 11 && m < 12) {
            return "winter"
          }
        }
      }
    }
  }
}

module.exports = {
  getSeason
};
