import doGame from '../index.js';

import getRandomNum from '../getRandomNumber.js';

function checkJustOrHardNumber(answ) {
  if (answ < 2) { return 'no'; }
  const q = Math.floor(Math.sqrt(answ));
  for (let i = 2; i <= q; i += 1) {
    if (answ % i === 0) {
      return 'no';
    }
  }
  return 'yes';
}

function generateNumber() {
  const num1 = getRandomNum();
  const question = num1;
  const answer = checkJustOrHardNumber(question);
  return [question, answer];
}

export default function playGamePrime() {
  doGame('Answer "yes" if given number is prime. Otherwise answer "no".', generateNumber);
}
