const CustomError = require("../extensions/custom-error");

module.exports = function transform( array ) {
  arr = array.concat()

  if( Array.isArray === false ) {
    throw new Error()
  }

  for ( let i = 0; i < arr.length; i++ ) {
    if ( arr[i] === '--discard-next' ) {
      if ( i === arr.length ) arr.splice(i, 1)
      else {
        arr[i] = 'qwert'
        arr[i + 1] = 'qwert'
      }
    }

    else if ( arr[i] === '--discard-prev' ) {
      if ( i === 0 ) arr.splice(i, 1)
      else {
        arr[i] = 'qwert'
        arr[i - 1] = 'qwert'
      }
    }

    else if ( arr[i] === '--double-prev' ) {
      if ( i === 0 ) arr.splice(i, 1)
      else {
        arr[i] = arr[i - 1]
      }
    }

    else if ( arr[i] === '--double-next' ) {
      if ( i === arr.length - 1 ) arr.splice(i, 1)
      else {
        arr[i] = arr[i + 1]
      }
    }
  }
  
  let res = []

  for ( let item of arr ) {
    if ( item === 'qwert' ) continue
    res.push(item)
  }
  return res
};
