// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {

  function numberSort(input) {
    const match = input.match(/[1-9][0-9]|\s/g);
    return match;
  }
  function numberCheck(message) {
    let numbers = message.match(/[0-9]/g);
    return numbers;
  }
  const alphabet = {
    'a': 11, 'b': 21, 'c': 31,
    'd': 41, 'e': 51, 'f': 12,
    'g': 22, 'h': 32, 'i': 42, 'j': 42,
    'k': 52, 'l': 13,
    'm': 23, 'n': 33, 'o': 43, 'p': 53,
    'q': 14, 'r': 24, 's': 34, 't': 44,
    'u': 54, 'v': 15, 'w': 25, 'x': 35,
    'y': 45, 'z': 55
  }
  function polybius(input, encode = true) {
    let numberAmount = numberCheck(input);
    if (numberAmount !== null && numberAmount.length % 2 > 0) {
      return false;
    }
    let codedMessage = []
    let letters = input.toLowerCase().split('');
    switch (encode) {
      case true: letters.forEach(letter => {
        if (Object.keys(alphabet).includes(letter)) {
          codedMessage.push(alphabet[letter]);
        } else {
          codedMessage.push(letter);
        }
      });
        return codedMessage.join('');
        break;
      case false:
        const alphabeta = {
          11: 'a', 21: 'b', 31: 'c',
          41: 'd', 51: 'e', 12: 'f',
          22: 'g', 32: 'h', 42: '(j/i)',
          52: 'k', 13: 'l',
          23: 'm', 33: 'n', 43: 'o', 53: 'p',
          14: 'q', 24: 'r', 34: 's', 44: 't',
          54: 'u', 15: 'v', 25: 'w', 35: 'x',
          45: 'y', 55: 'z'
        }
        let numbers = numberSort(input);
        numbers.forEach(number => {
          if (Object.keys(alphabeta).includes(number)) {
            codedMessage.push(alphabeta[number]);
          } else {
            codedMessage.push(number)
          }
        })
        return codedMessage.join('');
    }
    // your solution code here
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
