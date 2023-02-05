import doGame from '../index.js';

import getRandomNum from '../getRandomNumber.js';

const array = ['+', '-', '*'];

const text = 'What is the result of the expression?';

const generateSign = () => {
  const generateNum = getRandomNum(array.length - 1);
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
  const firstNum = getRandomNum();
  const secondNum = getRandomNum();
  const randomOperator = generateSign();
  const answer = String(calcOfNumber(firstNum, randomOperator, secondNum));
  const question = `${firstNum} ${randomOperator} ${secondNum}`;
  return [question, answer];
};

const playGameCalc = () => {
  doGame(text, generateQuestionAndAnswer);
};

export default playGameCalc;
