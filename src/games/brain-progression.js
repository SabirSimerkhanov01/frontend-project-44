import doGame from '../index.js';

import getRandomNum from '../getRandomNumber.js';

const getRandomInRange = (min, max) => {
  const result = Math.floor(Math.random() * (max - min + 1));
  return result;
};

const getProgression = () => {
  const result = [];
  let answer = [];
  const increaseTheRangeOfNumbers = 100;
  const randomNum = getRandomNum(increaseTheRangeOfNumbers);
  const randomNumInRange = getRandomInRange(0, 9);
  const sumNumberOfProgression = 10;
  for (let i = randomNum; i < randomNum + sumNumberOfProgression; i += 1) {
    result.push(randomNum * i);
    answer = result[randomNumInRange];
  } result[randomNumInRange] = '..';
  return [result.join(' '), String(answer)];
};

const playGameProgression = () => {
  doGame('What number is missing in the progression?', getProgression);
};

export default playGameProgression;
