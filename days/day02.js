import { readTextFile, splitLines } from "../utils/files.js";

// Win - 6 Points, Loss - 0 Points, Draw - 3 Points
// (A, X) Rock - 1 Point, (B, Y) Paper - 2 Points, (C, Z) Scissors - 3 Points

const file = readTextFile("days/day02-input.txt");
const splitFile = splitLines(file).map((a) => a.split(" "));

const replacedValues = splitFile.map((a) =>
  a.map((b) => {
    let replaceX = b.replace("X", "A");
    let replaceY = replaceX.replace("Y", "B");
    let replaceZ = replaceY.replace("Z", "C");
    return replaceZ;
  })
);

const win = 6;
const loss = 0;
const draw = 3;

const rock = 1;
const paper = 2;
const scissors = 3;

/**
 *
 * @param {number} self
 * @param {number} opp
 * @returns {number}
 */
const oppPlayedRock = (opp, self) => {
  const calc = opp - self;
  if (calc === -2) {
    return self + loss;
  } else if (calc === -1) {
    return self + win;
  } else {
    return self + draw;
  }
};
/**
 *
 * @param {number} self
 * @param {number} opp
 * @returns {number}
 */
const oppPlayedPaper = (opp, self) => {
  const calc = opp - self;
  if (calc === 1) {
    return self + loss;
  } else if (calc === -1) {
    return self + win;
  } else {
    return self + draw;
  }
};

/**
 *
 * @param {number} self
 * @param {number} opp
 * @returns {number}
 */
const oppPlayedScissors = (opp, self) => {
  const calc = opp - self;
  if (calc === 1) {
    return self + loss;
  } else if (calc === 2) {
    return self + win;
  } else {
    return self + draw;
  }
};

/**
 *
 * @param {string[]} game
 * @returns
 */

const whatDidIPlay = (game) => {
  if (game[1] === "A") {
    return rock;
  } else if (game[1] === "B") {
    return paper;
  } else {
    return scissors;
  }
};

//I should refactor this to check what the opp played vs what I played/should play.
// No score should be calculated as a part of the oppPlayed function.
// There should be a second function that calcs the points.
// X - Loss
// Y - Draw
// Z - Win

// const whatShouldIPlay = (game) => {};

const gameCalc = replacedValues.map((game) => {
  if (game[0] === "A") {
    return oppPlayedRock(rock, whatDidIPlay(game));
  } else if (game[0] === "B") {
    return oppPlayedPaper(paper, whatDidIPlay(game));
  } else {
    return oppPlayedScissors(scissors, whatDidIPlay(game));
  }
});

const sumOfAllGames = gameCalc.reduce((a, b) => a + b, 0);

console.log(sumOfAllGames);
