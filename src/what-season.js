const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
  if (!date) return 'Unable to determine the time of year!'
    
  try {
      date.getTime()
  }   catch (e) {
          throw new Error(e)
  }
  
  let month = date.getMonth()

  if ( month > 1 && month <= 4) return 'spring'
  else if ( month > 4 && month <= 7 ) return 'summer'
  else if ( month > 7 && month <= 10 ) return 'autumn'
  else if ( month === 11 || month <= 1 ) return 'winter'
};
