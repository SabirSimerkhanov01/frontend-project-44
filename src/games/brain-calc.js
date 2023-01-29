import doGame from '../index.js';

import getRandomNum from '../getRandomNumber.js';

import generateSign from '../getSign.js';

function calcOfNumber(number1, operator, number2) {
  let result;
  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      console.log('Invalid operator');
      break;
  } return result;
}

const generateNumber = () => {
  const firstNum = getRandomNum();
  const secondNum = getRandomNum();
  const randomOperator = generateSign(3);
  const answer = String(calcOfNumber(firstNum, randomOperator, secondNum));
  const questions = `${firstNum} ${randomOperator} ${secondNum}`;
  return [questions, answer];
};

export default function playGameCalc() {
  doGame('What is the result of the expression?', generateNumber);
}
