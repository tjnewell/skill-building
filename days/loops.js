const items = ["Dallon", "TJ", "Terris"];
const resultArray = [];
let index = 0;
while (index < items.length) {
  const currentItem = items[index];
  resultArray.push(currentItem.toUpperCase());
  index += 1;
}
for (let index = 0; index < items.length; index++) {
  const element = items[index];
}
for (const currentItem of items) {
}
console.log(resultArray);

console.log(items.map((currentItem) => currentItem.toUpperCase()));

/**
 * @param {unknown[]} input
 * @param {(item: any, index: number) => unknown} callback
 * @returns {any[]}
 */
function map(input, callback) {
  const resultArray = [];
  for (let index = 0; index < input.length; index++) {
    const element = input[index];
    resultArray.push(callback(element, index));
  }
  return resultArray;
}
