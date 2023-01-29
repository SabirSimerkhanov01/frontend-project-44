import doGame from '../index.js';

import getRandomNum from '../getRandomNumber.js';

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}

function getProgression() {
  const result = [];
  let answer = [];
  const num = getRandomNum();
  const num2 = getRandomInRange(0, 9);
  for (let i = num; i < num + 10; i += 1) {
    result.push(num * i);
    answer = result[num2];
  } result[num2] = '..';
  return [result.join(' '), String(answer)];
}

export default function playGameProgression() {
  doGame('What number is missing in the progression?', getProgression);
}
