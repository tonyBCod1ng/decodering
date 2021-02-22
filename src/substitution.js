// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  let letters = [
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z'
  ]

  function substitution(input, alphabet, encode = true) {
    let codedMessage = [];
    let legend = [];
    function key(data) { return letters.indexOf(data); }
    function unKey(data) { return legend.indexOf(data); }
    if (alphabet == undefined) {
      return false;
    } else if (alphabet.length !== 26) {
      return false;
    } else if (alphabet.length = 26) {
      for (let i = 0; i < alphabet.length; i++) {
        if (legend.includes(alphabet[i])) {
          return false;
        }
        legend.push(alphabet[i]);
      }
    }
    switch (encode) {
      case true:
        let message = input.toLowerCase().split('');
        message.forEach(letter => {
          if (letters.includes(letter)) {
            let newLetter = key(letter);
            codedMessage.push(legend[newLetter])
            console.log(legend[newLetter]);
          } else {
            codedMessage.push(letter)
          }
        });
        break;
      case false:
        let code = input.toLowerCase().split('')
        code.forEach(letter => {
          if (legend.includes(letter)) {
            let newLetter = unKey(letter);
            codedMessage.push(letters[newLetter])
            console.log(legend[newLetter]);
          } else {
            codedMessage.push(letter)
          }

        });
    }
    return codedMessage.join('');

    // your solution code here
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
