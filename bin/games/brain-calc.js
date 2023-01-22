#!/usr/bin/env node

import doGame from '../../src/index.js';

function getRandomNum() {
  const num = Math.random();
  const pop = num * 65;
  const fir = Math.round(pop);
  return fir;
}

function generateSign1(n) {
  return Math.floor(Math.random() * n);
}

function generateSign2() {
  let result;
  const num = generateSign1(3);
  if (num === 0) {
    result = '+';
  } if (num === 1) {
    result = '-';
  } if (num === 2) {
    result = '*';
  } return result;
}

function calcOfNumber(num1, sign, num2) {
  let result;
  const a = Number(num1);
  const c = Number(num2);
  if (sign === '-') {
    result = (a - c);
  } if (sign === '+') {
    result = (a + c);
  } if (sign === '*') {
    result = (a * c);
  } return Number(result);
}

const generateNumber = () => {
  const firstNum = getRandomNum();
  const secondNum = getRandomNum();
  const randomOperator = generateSign2();
  const answer = Number(calcOfNumber(firstNum, randomOperator, secondNum));
  const questions = `${firstNum} ${randomOperator} ${secondNum}`;
  return [questions, answer];
};

export default doGame('What is the result of the expression?', generateNumber);

export {
  getRandomNum, generateSign1, generateSign2, generateNumber,
};
