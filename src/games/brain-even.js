import doGame from '../index.js';

import getRandomNum from '../getRandomNumber.js';

const textForQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenOrOddNumber = (n) => !(n % 2);

const generateQuestionAndAnswer = () => {
  const firstNum = getRandomNum();
  const question = `${firstNum}`;
  const answer = isEvenOrOddNumber(firstNum) ? 'yes' : 'no';
  return [question, answer];
};

const playGameEven = () => {
  doGame(textForQuestion, generateQuestionAndAnswer);
};

export default playGameEven;
