import readlineSync from 'readline-sync';

import start from './cli.js';

const name = start();

function randomNum() {
  const num = Math.random();
  const pop = num * 65;
  const fir = Math.round(pop);
  return fir;
}

function answer(a) {
  let result;
  if (a === 'yes') {
    result = 'yes';
  } if (a === 'no') {
    result = 'no';
  } return result;
}

function checkNumber(n) {
  let result;
  if (n % 2 === 0) {
    result = 'yes';
  } else {
    result = 'no';
  } return result;
}

function correct3(word) {
  let result;
  const random = randomNum();
  if (word === 'Correct!') {
    console.log(`Question: ${random}`);
    const named = readlineSync.question('Your answer: ');
    if (named === checkNumber(random)) {
      result = `Congratulations, ${name}`;
    } if (named !== checkNumber(random)) {
      result = `'${named}' is wrong answer ;(. Correct answer was '${checkNumber(random)}'`;
    }
  } console.log(result);
}

function correct2(word) {
  let result;
  const random = randomNum();
  if (word === 'Correct!') {
    console.log(`Question: ${random}`);
    const named = readlineSync.question('Your answer: ');
    if (named === checkNumber(random)) {
      result = 'Correct!';
    } if (named !== checkNumber(random)) {
      result = `'${named}' is wrong answer ;(. Correct answer was '${checkNumber(random)}'`;
    }
  } console.log(result);
  if (result === 'Correct!') {
    correct3(result);
  }
}

export default function game() {
  let result;
  const randomn = randomNum();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(`Question: ${randomn}`);
  const named = readlineSync.question('Your answer: ');
  if (named !== checkNumber(randomn)) {
    result = `'${named}' is wrong answer ;(. Correct answer was '${checkNumber(randomn)}'`;
  }
  if (named === checkNumber(randomn)) {
    result = 'Correct!';
  } console.log(result);
  if (result === 'Correct!') {
    correct2(result);
  }
}

export {
  randomNum, answer, checkNumber, correct2, correct3,
};
