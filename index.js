const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
const reverseString = (string) => {
  return string.split('').reduce((reversed, char) => char + reversed, '');
};
const calculator = {
  add: (num, num2) => {
    return num + num2;
  },
  subtract: (num, num2) => {
    return num - num2;
  },
  multiply: (num, num2) => {
    return num * num2;
  },
  divide: (num, num2) => {
    return num / num2;
  },
};
const ceasarCipher = (string, key) => {
  string = string.toLowerCase();

  const letters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  const cipher = letters.slice(key).concat(letters);

  return [...string]
    .map((char) => {
      if (letters.includes(char)) {
        const index = letters.indexOf(char);
        return cipher[index];
      } else {
        return char;
      }
    })
    .join('');
};
const analyzeArray = (arr) => {
  const result = {
    average: arr.reduce((sum, cur) => sum + cur) / arr.length,
    min: arr.reduce((min, cur) => {
      if (min < cur) {
        return min;
      } else {
        return cur;
      }
    }),
    max: arr.reduce((max, cur) => {
      if (max > cur) {
        return max;
      } else {
        return cur;
      }
    }),
    length: arr.length,
  };
  return result;
};

export { capitalize, reverseString, calculator, ceasarCipher, analyzeArray };
