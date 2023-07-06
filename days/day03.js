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
  allRucksacks.forEach((rucksacks) => {
    rucksacks.forEach((rucksack) => {
      const length = rucksack.length;
      const firstCompartment = rucksack.slice(0, length / 2);
      const secondCompartment = rucksack.slice(length / 2);
      const newArray = [firstCompartment, secondCompartment];
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
function findDuplicates(rucksack) {
  let duplicates = [];
  const firstCompartment = rucksack[0].split("");
  while (0 < firstCompartment.length) {
    const firstItem = firstCompartment.shift();
    if (firstItem) {
      const isInSecondCompartment = rucksack[1].includes(firstItem);
      if (isInSecondCompartment) {
        duplicates.push(firstItem);
        break;
      }
    }
  }
  return duplicates;
}

const duplicateItemInEachRucksack = allDividedRucksacks.flatMap((rucksack) => {
  const listOfDuplicateItems = findDuplicates(rucksack);
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

/**
 *
 * @param {string[]} items
 * @returns {number[]}
 */
function combinedValues(items) {
  const calculatedValue = items.map((item) => {
    const value = calculateValue(item);
    return value;
  });
  return calculatedValue;
}

console.log(calculateTotalValue(combinedValues(duplicateItemInEachRucksack)));

/**
 *
 * @param {string[][]} allRucksacks
 * @returns {string[][][]}
 */
const groupRucksacks = (allRucksacks) => {
  const groupedRucksacks = [];
  for (let i = 0; i < allRucksacks.length; i += 3) {
    const rucksackGroup = allRucksacks.slice(i, i + 3);
    groupedRucksacks.push(rucksackGroup);
  }
  return groupedRucksacks;
};

const groupedRucksacks = groupRucksacks(splitFile);

/**
 *
 * @param {string[][][]} allGroupings
 * @returns {string[]}
 */

function findDuplicatesInThreeSacks(allGroupings) {
  /**
   * @type {string[]}
   */
  let duplicates = [];
  allGroupings.forEach((group) => {
    const firstSackInGroup = group[0][0].split("");
    while (0 < firstSackInGroup[0].length) {
      const firstItem = firstSackInGroup.shift();
      if (firstItem) {
        const isInOtherSacks =
          group[1][0].includes(firstItem) && group[2][0].includes(firstItem);
        if (isInOtherSacks) {
          duplicates.push(firstItem);
          break;
        }
      }
    }
  });
  return duplicates;
}

console.log(
  calculateTotalValue(
    combinedValues(findDuplicatesInThreeSacks(groupedRucksacks))
  )
);
