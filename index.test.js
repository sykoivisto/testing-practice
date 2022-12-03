import {
  capitalize,
  reverseString,
  calculator,
  ceasarCipher,
  analyzeArray,
} from '.';

test('capitalizes first letter', () => {
  expect(capitalize('javascript')).toBe('Javascript');
});

test('reverse the string', () => {
  expect(reverseString('abcdefg')).toBe('gfedcba');
});
test('addition on the calculator', () => {
  expect(calculator.add(2, 2)).toBe(4);
});
test('subtraction on the calculator', () => {
  expect(calculator.subtract(10, 2)).toBe(8);
});
test('multiplication on the calculator', () => {
  expect(calculator.multiply(2, 6)).toBe(12);
});
test('division on the calculator', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});
test('ceasar cipher works', () => {
  expect(ceasarCipher('javascript', 3)).toBe('mdydvfulsw');
});
test('ceasar cipher works wrapping z-a', () => {
  expect(ceasarCipher('zebra', 1)).toBe('afcsb');
});
test('ceasar cipher works with punctuation', () => {
  expect(ceasarCipher('i love pizza!!!', 1)).toBe('j mpwf qjaab!!!');
});
test('analyze array works', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
