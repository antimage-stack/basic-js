const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  let arr = []
  let brr =[]

  if ( options.separator === undefined ) options.separator = '+'
  
  if (options.additionSeparator === undefined ) options.additionSeparator = '|'
  
  if ( options.additionRepeatTimes === undefined && options.repeatTimes === undefined )  return (str + options.addition)

  for ( let key in options ) {
    if ( options[key] === null ) {
      options[key] = 'null'
    }
  }
  
  arr.length = options.repeatTimes

  if ( options.additionRepeatTimes === undefined ) {
    if ( options.addition ) {
      for ( let i = 0; i < arr.length; i++) {
        arr[i] = str + options.addition
      }
      return arr.join(options.separator)
    }
    else {
      for ( let i = 0; i < arr.length; i++) {
        arr[i] = str
      }
      return arr.join(options.separator)
    }
  }
  else {
    brr.length = options.additionRepeatTimes

    for ( let i = 0; i < brr.length; i++ ) {
      brr[i] = options.addition
    }
  
    let addStr = brr.join(options.additionSeparator)
    
    for ( let i = 0; i < arr.length; i++) {
      arr[i] = str + addStr
    }
  
    return arr.join(options.separator)
  }
};
  