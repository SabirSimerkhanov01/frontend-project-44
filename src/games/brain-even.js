import doGame from '../index.js';

import getRandomNum from '../getRandomNumber.js';

const text = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkEvenOrOddNumber = (n) => !(n % 2);

const generateQuestionAndAnswer = () => {
  const firstNum = getRandomNum();
  const question = `${firstNum}`;
  const answer = checkEvenOrOddNumber(firstNum) ? 'yes' : 'no';
  return [question, answer];
};

const playGameEven = () => {
  doGame(text, generateQuestionAndAnswer);
};

export default playGameEven;
