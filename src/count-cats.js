const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix ) { 
  let number = 0

  for ( let i = 0; i < matrix.length; i++ ) {
      for ( j = 0; j < matrix[i].length; j++ ) {
          let str = '^^'
          
          if ( matrix[i][j] === str ) {
              number++
          }
      }
  }

  return number 
};
