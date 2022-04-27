const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 let countCat= [ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ];

 function countCats(arr) {
   // throw new NotImplementedError('Not implemented');
   let cats = [];
 
   for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
          if( arr[i][j] === '^^') {
              cats.push(arr[i][j])
          }
        }
   }
   
   if(cats.length >= 1) {
     return cats.length
   } else {
     return 0
   }
 }
 
 countCats(countCat)

module.exports = {
  countCats
};
