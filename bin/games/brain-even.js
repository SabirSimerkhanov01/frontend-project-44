#!/usr/bin/env node

import doGame from '../../src/index.js';

function getRandomNum() {
  const num = Math.random();
  const pop = num * 65;
  const fir = Math.round(pop);
  return fir;
}

function getAnswer(a) {
  let result;
  if (a === 'yes') {
    result = 'yes';
  } if (a === 'no') {
    result = 'no';
  } return result;
}

function checkNumber(n) {
  let result;
  if (n % 2 === 0) {
    result = 'yes';
  } else {
    result = 'no';
  } return result;
}

const generateNumber = () => {
  let answer;
  const firstNum = getRandomNum();
  const questions = `${firstNum}`;
  if (Number(firstNum) % 2 === 0) {
    answer = 'yes';
  } if (Number(firstNum) % 2 !== 0) {
    answer = 'no';
  } return [questions, answer];
};

export default doGame('Answer "yes" if the number is even, otherwise answer "no".', generateNumber);

export {
  getRandomNum, getAnswer, checkNumber, generateNumber,
};
