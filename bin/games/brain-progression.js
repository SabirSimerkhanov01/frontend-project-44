#!/usr/bin/env node

import doGame from '../../src/index.js';

function getRandomNum() {
  const fir = Math.round(Math.random() * 40);
  return fir;
}

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}

function getProgression() {
  const num = getRandomNum();
  const num2 = getRandomInRange(0, 9);
  const log = (`${num} ${num * 2} ${num * 3} ${num * 4} ${num * 5} ${num * 6} ${num * 7} ${num * 8} ${num * 9} ${num * 10} ${num * (num2 + 1)}`);
  const share = log.split(' ');
  share[num2] = '..';
  const toString = share.join(' ');
  const returnes = [toString, num2];
  const shareToAnswer = log.split(' ');
  return [returnes[0], shareToAnswer[num2]];
}

export default doGame('What number is missing in the progression?', getProgression);

export {
  getProgression, getRandomNum, getRandomInRange,
};
