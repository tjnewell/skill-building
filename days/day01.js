import { assertEquals } from "../utils/assert.js";
import { readTextFile, splitLines } from "../utils/files.js";

const file = readTextFile("days/day00-input.txt");
const allElvesTogether = splitLines(file);

const findSplit = (/** @type {string} */ element) => element === "";

const checkForEOF = () => {
  const bob = allElvesTogether.findIndex(findSplit) + 1;
  if (bob === 0) {
    return allElvesTogether.length;
  }
  return bob;
};

let allTheFood = [];
while (0 < allElvesTogether.length) {
  let susan = allElvesTogether.splice(0, checkForEOF());
  allTheFood.push(susan);
}

const filtedOutEmptyStrings = allTheFood.map((checkEachElf) =>
  checkEachElf.filter((noFood) => noFood !== "")
);

const replaceStringsWithNumbers = filtedOutEmptyStrings.map((innerArray) =>
  innerArray.map((insideString) => parseInt(insideString))
);

const sumOfCalorieInEachArray = replaceStringsWithNumbers
  .map((moreFood) => moreFood.reduce((a, b) => a + b, 0))
  .sort((a, b) => {
    return b - a;
  });

console.log(sumOfCalorieInEachArray[0]);

console.log(sumOfCalorieInEachArray.slice(0, 3).reduce((a, b) => a + b, 0));
