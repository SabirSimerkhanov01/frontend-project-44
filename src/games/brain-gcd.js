import doGame from '../index.js';

import getRandomNum from '../getRandomNumber.js';

const getCommonShare = (a, b) => {
  let num1 = a;
  let num2 = b;
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  } return num1 + num2;
};

const generateQuestionAndAnswer = () => {
  const increaseTheRangeOfNumbers = 100;
  const firstNum = getRandomNum(increaseTheRangeOfNumbers);
  const secondNum = getRandomNum(increaseTheRangeOfNumbers);
  const answer = String(getCommonShare(firstNum, secondNum));
  const question = `${firstNum} ${secondNum}`;
  return [question, answer];
};

const playGameGcd = () => {
  doGame('Find the greatest common divisor of given numbers.', generateQuestionAndAnswer);
};

export default playGameGcd;
