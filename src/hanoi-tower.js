const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  let result = {
    turns: 1,
    seconds: 1
  }

  for ( let i = 2; i <= disksNumber; i++ ) {
    result.turns *= 2
    result.turns += 1
  }

  turnsSpeed = turnsSpeed / 3600
  result.seconds = Math.floor(result.turns / turnsSpeed)

  return result
};
