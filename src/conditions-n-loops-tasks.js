/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(n) {
  return n >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a > b && a > c) {
    return a;
  }
  if (b > c && a < b) {
    return b;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(q, k) {
  const absX = Math.abs(q.x - k.x);
  const absY = Math.abs(q.y - k.y);
  if (absX === absY || absX === 0 || absY === 0) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a && b && c) {
    return (
      (a === b && a + b > c) || (a === c && a + c > b) || (b === c && b + c > a)
    );
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  const X = Math.floor(num / 10);
  const I = num % 10;

  let result = '';

  for (let i = 0; i < X; i += 1) {
    result += 'X';
  }

  if (I <= 3) {
    for (let i = 0; i < I; i += 1) {
      result += 'I';
    }
  } else if (I === 4) {
    result += 'IV';
  } else if (I === 5) {
    result += 'V';
  } else if (I === 9) {
    result += 'IX';
  } else {
    result += 'V';
    for (let i = 0; i < I - 5; i += 1) {
      result += 'I';
    }
  }

  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */

// tbh fuckiest reason to force use switch
function convertNumberToString(str) {
  const length = str.length - 1;
  let result = '';

  for (let i = 0; i <= length; i += 1) {
    switch (str[i]) {
      case '-':
        result += 'minus';
        break;
      case '.':
      case ',':
        result += 'point';
        break;
      case '0':
        result += 'zero';
        break;
      case '1':
        result += 'one';
        break;
      case '2':
        result += 'two';
        break;
      case '3':
        result += 'three';
        break;
      case '4':
        result += 'four';
        break;
      case '5':
        result += 'five';
        break;
      case '6':
        result += 'six';
        break;
      case '7':
        result += 'seven';
        break;
      case '8':
        result += 'eight';
        break;
      case '9':
        result += 'nine';
        break;
      default:
    }

    if (i < length) {
      result += ' ';
    }
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  const length = str.length - 1;
  let reverseStr = '';

  for (let i = length; i >= 0; i -= 1) {
    reverseStr += str[i];
  }

  return str === reverseStr;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 2
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let result;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      result = i;
    }
  }
  return result >= 0 ? result : -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const str = `${num}`;
  const letter = `${digit}`;
  let result = false;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      result = true;
    }
  }
  return result;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  const length = arr.length - 1;
  let right = 0;
  let left = 0;
  let result = -1;

  for (let i = 0; i <= length; i += 1) {
    right += arr[i];
  }

  for (let i = 0; i <= length; i += 1) {
    right -= arr[i];
    if (right === left) {
      result = i;
      return result;
    }
    left += arr[i];
  }

  return result;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const matrix = new Array(size);
  let start = 0;
  let end = size - 1;
  let value = 1;

  for (let i = 0; i < size; i += 1) {
    matrix[i] = new Array(size);
  }

  while (start <= end) {
    for (let rowTop = start; rowTop <= end; rowTop += 1) {
      matrix[start][rowTop] = value;
      value += 1;
    }

    for (let colRight = start + 1; colRight <= end; colRight += 1) {
      matrix[colRight][end] = value;
      value += 1;
    }

    for (let rowBottom = end - 1; rowBottom >= start; rowBottom -= 1) {
      matrix[end][rowBottom] = value;
      value += 1;
    }

    for (let columnLeft = end - 1; columnLeft > start; columnLeft -= 1) {
      matrix[columnLeft][start] = value;
      value += 1;
    }

    start += 1;
    end -= 1;
  }

  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(/* matrix */) {
  throw new Error('Not implemented');
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const sortedArr = arr;

  function customSort(newArr, startPos = 0, endPos = newArr.length - 1) {
    const center = newArr[Math.floor((startPos + endPos) / 2)];

    let start = startPos;
    let end = endPos;

    while (start < end) {
      while (newArr[start] < center) {
        start += 1;
      }

      while (center < newArr[end]) {
        end -= 1;
      }

      if (end >= start) {
        [sortedArr[start], sortedArr[end]] = [newArr[end], newArr[start]];
        start += 1;
        end -= 1;
      }
    }

    if (startPos < end) {
      customSort(newArr, startPos, end);
    }

    if (start < endPos) {
      customSort(newArr, start, endPos);
    }
  }

  customSort(sortedArr);

  return sortedArr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */

function shuffleChar(str, n) {
  let result = str;
  let nLeft = n;

  while (nLeft) {
    let left = '';
    let right = '';

    for (let i = 0; i < result.length; i += 1) {
      const char = result[i];
      if (i % 2) {
        right += char;
      } else {
        left += char;
      }
    }

    nLeft -= 1;
    result = left + right;

    if (result === str) {
      nLeft = n % (n - nLeft);
    }
  }

  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */

// Yes, I'm a dogwater ...

function getNearestOverride(n) {
  const original = `${n}`.split('').sort().join('');
  let fake = n;
  let isConsist = false;
  let result;

  while (!isConsist) {
    fake += 1;
    if (`${fake}`.split('').sort().join('') === original) {
      isConsist = true;
      result = fake;
    }
  }

  return result;
}

function getNearestBigger(n) {
  if (n <= 11) {
    return n;
  }

  return getNearestOverride(n);
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
