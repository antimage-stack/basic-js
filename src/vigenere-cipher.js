const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type) {
      this.type = type
  }

  encrypt(message, key) {
      if (!message || !key ) {
          throw new Error()
      }

      message = message.toUpperCase()
      key = key.toUpperCase()
      let Skey = ''
      let Smessage = ''
      let alphabet = ''
    
      //alphabet create
      for ( let i = 65; i <= 90; i++ ) {
        alphabet += String.fromCodePoint(i)
      }
    
      //create Skey
      let j = 0
      for ( let i = 0 ; Skey.length < message.length; i++ ) {
        if( message[i].codePointAt(0) >= 65 && message[i].codePointAt(0) <= 90 ) {
          Skey += key[j]
          j++
          if ( j === key.length ) j = 0
        }
        else {
          Skey += message[i]
        }
      } 
    
      //create Smessage
      for ( let i = 0; i < message.length; i++ ) {
        if( message[i].codePointAt(0) >= 65 && message[i].codePointAt(0) <= 90 ) {
          if ( alphabet.indexOf(message[i]) + alphabet.indexOf(Skey[i]) > 25) {
            Smessage += String.fromCodePoint( alphabet.indexOf(message[i]) + alphabet.indexOf(Skey[i]) -26 + 65)
          }
          else {
            Smessage += String.fromCodePoint( alphabet.indexOf(message[i]) + alphabet.indexOf(Skey[i]) + 65)
          }
        }
        else Smessage += message[i]
      }

      if ( this.type === false ) return Smessage.split('').reverse().join('')

      return Smessage
  }    
  decrypt(message, key) {
      if (!message || !key ) {
          throw new Error()
      }

      message = message.toUpperCase()
      key = key.toUpperCase()
      let Skey = ''
      let Smessage = ''
      let alphabet = ''
    
      //alphabet create
      for ( let i = 65; i <= 90; i++ ) {
        alphabet += String.fromCodePoint(i)
      }
    
      //create Skey
      let j = 0
      for ( let i = 0 ; Skey.length < message.length; i++ ) {
        if( message[i].codePointAt(0) >= 65 && message[i].codePointAt(0) <= 90 ) {
          Skey += key[j]
          j++
          if ( j === key.length ) j = 0
        }
        else {
          Skey += message[i]
        }
      } 
    
      //create Smessage
      for ( let i = 0; i < message.length; i++ ) {
        if( message[i].codePointAt(0) >= 65 && message[i].codePointAt(0) <= 90 ) {
          if ( alphabet.indexOf(message[i]) - alphabet.indexOf(Skey[i]) < 0) {
            Smessage += String.fromCodePoint( alphabet.indexOf(message[i]) - alphabet.indexOf(Skey[i]) + 26 + 65)
          }
          else {
            Smessage += String.fromCodePoint( alphabet.indexOf(message[i]) - alphabet.indexOf(Skey[i]) + 65)
          }
        }
        else Smessage += message[i]
      }

      if ( this.type === false ) return Smessage.split('').reverse().join('')

      return Smessage
  }
}

module.exports = VigenereCipheringMachine;
