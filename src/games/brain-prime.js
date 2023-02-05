import doGame from '../index.js';

import getRandomNum from '../getRandomNumber.js';

const text = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isJustOrHardNumber = (answ) => {
  if (answ < 2) { return false; }
  const fixedNumber = Math.floor(Math.sqrt(answ));
  for (let i = 2; i <= fixedNumber; i += 1) {
    if (answ % i === 0) {
      return false;
    }
  }
  return true;
};

const generateQuestionAndAnswer = () => {
  const randomNum = getRandomNum();
  const answer = isJustOrHardNumber(randomNum) ? 'yes' : 'no';
  return [randomNum, answer];
};

const playGamePrime = () => {
  doGame(text, generateQuestionAndAnswer);
};

export default playGamePrime;
