import doGame from '../index.js';

import getRandomNum from '../getRandomNumber.js';

const textForQuestion = 'Find the greatest common divisor of given numbers.';

const getCommonShare = (a, b) => {
  let num1 = a;
  let num2 = b;
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  return num1 + num2;
};

const generateQuestionAndAnswer = () => {
  const firstNum = getRandomNum();
  const secondNum = getRandomNum();
  const answer = String(getCommonShare(firstNum, secondNum));
  const question = `${firstNum} ${secondNum}`;
  return [question, answer];
};

const playGameGcd = () => {
  doGame(textForQuestion, generateQuestionAndAnswer);
};

export default playGameGcd;
