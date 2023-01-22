#!/usr/bin/env node

import doGame from '../../src/index.js';

const listJustNumbers = '2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97 101 103 107 109 113 127 131 137 139 149 151 157 163 167 173 179 181 191 193 197 199 211 223 227 229 233 239 241 251';

const shareJustNumbers = listJustNumbers.split(' ');

function checkJustOrHardNumber(answ, list) {
  let result;
  const a = answ;
  const b = list;
  for (let i = 0; i < b.length; i += 1) {
    if (a === Number(b[i])) {
      result = 'yes';
    } if (result === undefined) {
      result = 'no';
    }
  } return result;
}

function changeYesOrNo(word) {
  let result;
  if (word === 'yes') {
    result = 'no';
  } if (word === 'no') {
    result = 'yes';
  } return result;
}

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}

function generateNumber() {
  const num1 = getRandomInRange(0, 251);
  const question = num1;
  const answer = checkJustOrHardNumber(question, shareJustNumbers);
  return [question, answer];
}

export default doGame('Answer "yes" if given number is prime. Otherwise answer "no".', generateNumber);

export {
  getRandomInRange, checkJustOrHardNumber, changeYesOrNo,
};
