import doGame from '../index.js';

import getRandomNum from '../getRandomNumber.js';

const generateSign = () => {
  const array = ['+', '-', '*'];
  const generateNum = Math.floor(Math.random() * (array.length));
  return array[generateNum];
};

const calcOfNumber = (number1, operator, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error('Invalid operator');
  }
};

const generateQuestionAndAnswer = () => {
  const increaseTheRangeOfNumbers = 100;
  const firstNum = getRandomNum(increaseTheRangeOfNumbers);
  const secondNum = getRandomNum(increaseTheRangeOfNumbers);
  const randomOperator = generateSign(3);
  const answer = String(calcOfNumber(firstNum, randomOperator, secondNum));
  const questions = `${firstNum} ${randomOperator} ${secondNum}`;
  return [questions, answer];
};

const playGameCalc = () => {
  doGame('What is the result of the expression?', generateQuestionAndAnswer);
};

export default playGameCalc;
