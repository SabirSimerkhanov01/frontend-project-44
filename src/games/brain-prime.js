import doGame from '../index.js';

import getRandomNum from '../getRandomNumber.js';

const checkJustOrHardNumber = (answ) => {
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
  const increaseTheRangeOfNumbers = 100;
  const randomNum = getRandomNum(increaseTheRangeOfNumbers);
  let answer = checkJustOrHardNumber(randomNum);
  if (answer === true) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return [randomNum, answer];
};

const playGamePrime = () => {
  doGame('Answer "yes" if given number is prime. Otherwise answer "no".', generateQuestionAndAnswer);
};

export default playGamePrime;
