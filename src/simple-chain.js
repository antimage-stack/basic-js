const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length
  },
  addLink(value) {
    this.arr.push('( ' + value + ' )')
    return this
  },
  removeLink(position) {
    if ( (position ^ 0) === position && position > 0 )  {
      this.arr.splice( position - 1, 1)
      return this      
    }
    else {
      this.arr = []
      throw new Error()
    }
  },
  reverseChain() {
    this.arr.reverse()
    return this
  },
  finishChain() {
    let str = this.arr.slice(0)
    this.arr = []
    return str.join('~~')
  }
};

module.exports = chainMaker;
