// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = {
    'a': 97, 'b': 98, 'c': 99,
    'd': 100, 'e': 101, 'f': 102,
    'g': 103, 'h': 104, 'i': 105,
    'j': 106, 'k': 107, 'l': 108,
    'm': 109, 'n': 110, 'o': 111, 'p': 112,
    'q': 113, 'r': 114, 's': 115, 't': 116,
    'u': 117, 'v': 118, 'w': 119, 'x': 120,
    'y': 121, 'z': 122
  }
  const letters = Object.keys(alphabet)
  function caesar(input, shift, encode = true) {
    let translation = '';
    if (shift > 25 || shift < -25 || shift === 0) {
      return false;
    };
    let list = input.toLowerCase().split('');
    switch (encode) {
      case true:
        for (let i = 0; i < list.length; i++) {
          let letterVal = alphabet[list[i]];
          let newLetter = letterVal + shift;
          if (letters.includes(list[i])) {
            newLetter > 122 ? newLetter = ((letterVal + shift) % 122) + 96 :
              newLetter < 97 ? newLetter = 123 - (97 % (letterVal + shift)) : newLetter;
            translation += String.fromCharCode(newLetter);
          } else {
            translation += list[i];
          };
        };
        break;
      case false:
        for (let i = 0; i < list.length; i++) {
          let letterVal = alphabet[list[i]]
          let newLetter = letterVal - shift;
          if (letters.includes(list[i])) {
            newLetter > 122 ? newLetter = ((letterVal - shift) % 122) + 96 :
              newLetter < 97 ? newLetter = 123 - (97 % (letterVal - shift)) : newLetter;
            translation += String.fromCharCode(newLetter);
          } else {
            translation += list[i];
          }
        };
    }
    return translation;
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
