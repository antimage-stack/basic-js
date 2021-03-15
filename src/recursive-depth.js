const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) { 
    
    let count = 0
  
    if (Array.isArray(arr)) {
      count++
      for ( let item of arr ) {
        if ( Array.isArray(item) ) {
          count = Math.max(count, this.calculateDepth(item) + 1)
        }
        else count += 0
      }
    }
    else count += 0
  
    return count
  }
};