import { readTextFile, splitLines } from "../utils/files.js";

// Win - 6 Points, Loss - 0 Points, Draw - 3 Points
// A Rock - 1 Point, B Paper - 2 Points, C Scissors - 3 Points
// X - Loss, Y - Draw, Z - Win
const file = readTextFile("days/day02-input.txt");
const splitFile = splitLines(file).map((a) => a.split(" "));

// Now begins a complete refactor !!

/*
First var is the opp play.
Second var is if I should lose, draw or win.
*/

// I know the play of my opponent.
// I know if I should lose, draw, or win.
// I need to know what I should play.
// I need to know the score of the game.
// I need to know the score of all games.

// 4880 is to low
// 14666 is to high

const rock = 1;
const paper = 2;
const scissors = 3;

const win = 6;
const loss = 0;
const draw = 3;

/**
 *
 * @param {string[]} game
 * @returns {number}
 */
const opp = (game) => {
  if (game[0] === "A") {
    return rock;
  } else if (game[0] === "B") {
    return paper;
  } else {
    return scissors;
  }
};

/**
 *
 * @param {string[]} game
 * @returns {number}
 */
const outcome = (game) => {
  if (game[1] === "X") {
    return loss;
  } else if (game[1] === "Y") {
    return draw;
  } else {
    return win;
  }
};

/**
 *
 * @param {number} opp
 * @param {number} outcome
 * @returns {number}
 */

const self = (opp, outcome) => {
  if (opp === rock) {
    if (outcome === loss) {
      return scissors;
    } else if (outcome === draw) {
      return rock;
    } else {
      return paper;
    }
  } else if (opp === paper) {
    if (outcome === loss) {
      return rock;
    } else if (outcome === draw) {
      return paper;
    } else {
      return scissors;
    }
  } else {
    if (outcome === loss) {
      return paper;
    } else if (outcome === draw) {
      return scissors;
    } else {
      return rock;
    }
  }
};

const gameCalc = splitFile.map((game) => {
  return self(opp(game), outcome(game)) + outcome(game);
});

const sumOfAllGames = gameCalc.reduce((a, b) => a + b, 0);

console.log(sumOfAllGames);

// const replacedValues = splitFile.map((a) =>
//   a.map((b) => {
//     let replaceX = b.replace("X", "A");
//     let replaceY = replaceX.replace("Y", "B");
//     let replaceZ = replaceY.replace("Z", "C");
//     return replaceZ;
//   })
// );

// const win = 6;
// const loss = 0;
// const draw = 3;

// const rock = 1;
// const paper = 2;
// const scissors = 3;

// /**
//  *
//  * @param {number} self
//  * @param {number} opp
//  * @returns {number}
//  */
// const oppPlayedRock = (opp, self) => {
//   const calc = opp - self;
//   if (calc === -2) {
//     return self + loss;
//   } else if (calc === -1) {
//     return self + win;
//   } else {
//     return self + draw;
//   }
// };
// /**
//  *
//  * @param {number} self
//  * @param {number} opp
//  * @returns {number}
//  */
// const oppPlayedPaper = (opp, self) => {
//   const calc = opp - self;
//   if (calc === 1) {
//     return self + loss;
//   } else if (calc === -1) {
//     return self + win;
//   } else {
//     return self + draw;
//   }
// };

// /**
//  *
//  * @param {number} self
//  * @param {number} opp
//  * @returns {number}
//  */
// const oppPlayedScissors = (opp, self) => {
//   const calc = opp - self;
//   if (calc === 1) {
//     return self + loss;
//   } else if (calc === 2) {
//     return self + win;
//   } else {
//     return self + draw;
//   }
// };

// /**
//  *
//  * @param {string[]} game
//  * @returns
//  */

// This function determines what I need to play to win.

// const whatDidIPlay = (game) => {
//   if (game[1] === "A") {
//     return rock;
//   } else if (game[1] === "B") {
//     return paper;
//   } else {
//     return scissors;
//   }
// };

// //I should refactor this to check what the opp played vs what I played/should play.
// // No score should be calculated as a part of the oppPlayed function.
// // There should be a second function that calcs the points.
// // X - Loss
// // Y - Draw
// // Z - Win

// // const whatShouldIPlay = (game) => {};

// const gameCalc = replacedValues.map((game) => {
//   if (game[0] === "A") {
//     return oppPlayedRock(rock, whatDidIPlay(game));
//   } else if (game[0] === "B") {
//     return oppPlayedPaper(paper, whatDidIPlay(game));
//   } else {
//     return oppPlayedScissors(scissors, whatDidIPlay(game));
//   }
// });

// const sumOfAllGames = gameCalc.reduce((a, b) => a + b, 0);

// console.log(sumOfAllGames);
