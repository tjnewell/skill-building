import { readTextFile, splitLines } from "../utils/files.js";

const file = readTextFile("days/day03-input.txt");
const splitFile = splitLines(file).map((a) => a.split(" "));

/**
 *
 * @param {string[][]} allRucksacks
 * @returns {string[][]}
 */
function sliceRucksacks(allRucksacks) {
  /**
   * @type {string[][]}
   */
  const splitRucksacks = [];
  allRucksacks.map((rucksacks) => {
    rucksacks.map((rucksack) => {
      const length = rucksack.length;
      const firstCompartment = rucksack.slice(0, length / 2);
      const secondCompartment = rucksack.slice(length / 2);
      const newArray = new Array(firstCompartment, secondCompartment);
      return splitRucksacks.push(newArray);
    });
  });
  return splitRucksacks;
}

const allDividedRucksacks = sliceRucksacks(splitFile);

/**
 * @param {string[]} rucksack
 * @returns {string[]}
 */
function compareCompartments(rucksack) {
  let duplicates = [];
  const splitSack = rucksack.flatMap((a) => a.split(", "));
  const firstCompartment = splitSack[0].split("");
  while (0 < firstCompartment.length) {
    const firstItem = firstCompartment.shift();
    if (firstItem) {
      const isInSecondCompartment = splitSack[1].includes(firstItem);
      if (isInSecondCompartment) {
        duplicates.push(firstItem);
        break;
      }
    }
  }
  return duplicates;
}

const duplicateItemInEachRucksack = allDividedRucksacks.flatMap((rucksack) => {
  const listOfDuplicateItems = compareCompartments(rucksack);
  return listOfDuplicateItems;
});

const pointIndex = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

/**
 *
 * @param {string} item
 * @returns {number}
 */
function calculateValue(item) {
  const points = pointIndex.split("");
  const value = points.indexOf(item) + 1;
  return value;
}

/**
 *
 * @param {number[]} values
 * @returns {number}
 */
function calculateTotalValue(values) {
  const total = values.reduce((a, b) => a + b, 0);
  return total;
}

const combinedValues = duplicateItemInEachRucksack.map((item) => {
  const value = calculateValue(item);
  return value;
});

console.log(calculateTotalValue(combinedValues));

// Part 2 Wants to know what item, in a grouping of 3 rucksacks in order, are includes in the 3 rucksacks.
