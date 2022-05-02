const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {optionsect} options options optionsect 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let arr = [];
  arr.push(str);


  function firstRepeat(options) {
    if (options.hasOwnProperty('additionSeparator')) {
      if (options.hasOwnProperty('additionRepeatTimes')) {
        if (options.hasOwnProperty('addition')) {
          for (let i = 0; i < options.additionRepeatTimes; i++) {
            if (!(options.additionRepeatTimes - i === 1)) {
              addition();
              additionSeparator();
            } else {
              addition();
            }
          }
        } else {
          for (let i = 0; i < options.additionRepeatTimes; i++) {
            if (!(options.additionRepeatTimes - i === 1)) {
              additionSeparator();
            }
          }
        }
      } else {
        options.hasOwnProperty('addition') ? (addition(), additionSeparator()) : additionSeparator();
      }
    } else {
      if (options.hasOwnProperty('additionRepeatTimes')) {
        for (let i = 0; i < options.additionRepeatTimes; i++) {
          if (!(options.additionRepeatTimes - i === 1)) {
            addition();
            arr.push("|")
          } else {
            addition();
          }
        }
      } else {
        addition();
        arr.push("|");
      }

    }
  }

  if ((options.hasOwnProperty('separator'))) {
    if ((options.hasOwnProperty('repeatTimes'))) {
      for (let i = 0; i < options.repeatTimes; i++) {
        if (!(options.repeatTimes - i === 1)) {
          firstRepeat(options);
          separator();
          arr.push(str)
        } else {
          firstRepeat(options);
        }

      }
    } else {
      firstRepeat(options);
      separator();
      arr.push(str)
    }
  } else {
    if ((options.hasOwnProperty('repeatTimes'))) {
      for (let i = 0; i < options.repeatTimes; i++) {
        if (!(options.repeatTimes - i === 1)) {
          firstRepeat(options);
          arr.push("+");
          arr.push(str);
        } else {
          firstRepeat(options);
        }

      }
    } else {
      firstRepeat(options);
      arr.push("+");
      arr.push(str)
    }
  }

  function addition() {
    arr.push(options.addition)
  }
  function additionSeparator() {
    arr.push(options.additionSeparator)
  }
  function separator() {
    arr.push(options.separator)
  }
  console.log(arr.join(''))
  return arr.join('')
}

module.exports = {
  repeater
};
