const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */


const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length
  },
  addLink(v) {
    if (v === undefined) {
      this.arr.push(`( )`)
    } else {
      this.arr.push(`( ${v} )`)
    }
    console.log(this)
    return this
  },
  removeLink(a) {
    if(typeof a !== "number") {
      throw new Error("You can't remove incorrect link!")
    }
    if(!Number.isInteger(a)) {
      throw new Error("You can't remove incorrect link!")
    }
    if(a <= 0) {
      throw new Error("You can't remove incorrect link!")
    }
    if(a > this.arr.length - 1) {
      throw new Error("You can't remove incorrect link!")
    }
    this.arr.splice(a - 1, 1)
    return this
  },
  reverseChain() {
    this.arr.reverse()
    return this
  },
  finishChain() {
    return this.arr.join('~~')
  }
};

module.exports = {
  chainMaker
};
