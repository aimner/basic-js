const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
let num = 1;

class DepthCalculator {
  calculateDepth(arr) {
    let num = 1;
    console.log(arr)
    if(arr.some(item => Array.isArray(item))) {
      const newArr = arr.reduce((a, b) => a.concat(b), []);
      console.log(newArr)
      return num + this.calculateDepth(newArr);
    }
    return num
}
}

const depthCalc = new DepthCalculator();

module.exports = {
  DepthCalculator
};
