#!/usr/bin/env node

import doGame from '../../src/index.js';

function getRandomNum() {
  const fir = Math.round(Math.random() * 65);
  return fir;
}

function getCommonShare(a, b) {
  let num1 = a;
  let num2 = b;
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  } return num1 + num2;
}

const generateNumber = () => {
  const firstNum = getRandomNum();
  const secondNum = getRandomNum();
  const answer = getCommonShare(firstNum, secondNum);
  const question = `${firstNum} ${secondNum}`;
  return [question, answer];
};

export default doGame('Find the greatest common divisor of given numbers.', generateNumber);

export {
  getCommonShare, getRandomNum, generateNumber,
};
