// ****************** Iteration 1 | Find the Maximum
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  }
  return a;
}

// ****************** Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviatorrrrrrrrrrrrrreeeeeeeeeeeeeeeeeee",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];

let numbers = [100, 1, 2, 3];
function countLengthOfWords(arr) {
  if (!arr.length) {
    return null;
  } else {
    let lengthOfWords = [];
    for (let i = 0; i < arr.length; i++) {
      lengthOfWords.push(arr[i].length);
    }
    return lengthOfWords;
  }
}
console.log("hey", countLengthOfWords(words));

function findMaxValue(arr) {
  if (!arr.length) {
    return null;
  } else {
    let maxValue = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxValue) {
        maxValue = arr[i];
      }
    }
    return maxValue;
  }
}
console.log(`max value is: ${findMaxValue(countLengthOfWords(words))}`);

function findLongestWord(arr) {
  if (!arr.length) {
    return null;
  } else {
    return arr[
      countLengthOfWords(arr).indexOf(findMaxValue(countLengthOfWords(arr)))
    ];
  }
}
console.log(`findLongestWord is : ${findLongestWord(words)}`);

// ****************** Iteration 3 | Sum Numbers
const numbersz = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(`sum of array is: ${sumNumbers(numbersz)}`);

// ****************** Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
  let arrayLength = arr.length;
  let sum = 0;
  if (!arrayLength) {
    return 0;
  } else {
    for (let i = 0; i < arrayLength; i++) {
      sum += arr[i];
    }
  }
  return sum / arrayLength;
}
console.log(`average of this array is: ${averageNumbers(numbers2)}`);
// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(arr, wordsToSearch) {
  if (!arr.length) {
    return null;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].includes(wordsToSearch)) {
        return true;
      }
    }
    return false;
  }
}

console.log(doesWordExist);
