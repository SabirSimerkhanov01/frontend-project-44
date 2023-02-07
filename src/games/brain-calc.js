import doGame from '../index.js';

import getRandomNum from '../getRandomNumber.js';

const arrayWithSign = ['+', '-', '*'];

const textForQuestion = 'What is the result of the expression?';

const generateSign = (array) => {
  const generateNum = getRandomNum(0, array.length - 1);
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
  const randomOperator = generateSign(arrayWithSign);
  const answer = String(calcOfNumber(firstNum, randomOperator, secondNum));
  const question = `${firstNum} ${randomOperator} ${secondNum}`;
  return [question, answer];
};

const playGameCalc = () => {
  doGame(textForQuestion, generateQuestionAndAnswer);
};

export default playGameCalc;
