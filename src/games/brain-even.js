import doGame from '../index.js';

import getRandomNum from '../getRandomNumber.js';

const checkEvenOrOddNumber = (firstNum) => {
  let result;
  if (Number(firstNum) % 2 === 0) {
    result = true;
  } if (Number(firstNum) % 2 !== 0) {
    result = false;
  } return result;
};

const generateQuestionAndAnswer = () => {
  const increaseTheRangeOfNumbers = 100;
  const firstNum = getRandomNum(increaseTheRangeOfNumbers);
  const questions = `${firstNum}`;
  let answer = checkEvenOrOddNumber(firstNum);
  if (answer === true) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return [questions, answer];
};

const playGameEven = () => {
  doGame('Answer "yes" if the number is even, otherwise answer "no".', generateQuestionAndAnswer);
};

export default playGameEven;
