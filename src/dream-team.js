const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(arr) {
  if (!Array.isArray(arr)) {
    return false
  }
  let name = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'string') {
      continue
    }
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === ' ') {
        continue
      } else {
        name.push(arr[i][j])
        break
      }
    }

  }
  let word = name.sort().join('');
  return word.toUpperCase()
}

module.exports = {
  createDreamTeam
};
