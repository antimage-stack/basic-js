const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  let str = []
  
  if ( !Array.isArray(members) ) return false

  for ( let item of members ) {
    if ( typeof(item) === typeof('') ) {
      str = str.concat(item)
    }
  }

  for ( let i = 0; i < str.length; i++ ) {
    if ( str[i][0] === ' ' ) {
      str[i] = str[i].slice(1)
      i = -1
    }
  }

  return str.map( item => item[0].toUpperCase()).sort().join('')
};
