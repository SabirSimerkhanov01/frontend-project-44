import doGame from '../index.js';

import getRandomNum from '../getRandomNumber.js';

const text = 'What number is missing in the progression?';

const countNumberOfProgression = 10;

const getRandomInRange = (min = 0, max = 9) => {
  const result = Math.floor(Math.random() * (max - min + 1));
  return result;
};

const getProgression = (progressionCount, randomNum) => {
  const result = [];
  for (let i = randomNum; i < randomNum + progressionCount; i += 1) {
    result.push(randomNum * i);
  }
  return result;
};

const hideElementInProgression = (progression) => {
  const lengthProgression = progression.length - 1;
  const hideElement = getRandomInRange(0, lengthProgression);
  return hideElement;
};

const madeDataForRound = () => {
  const randomNumber = getRandomNum();
  const progression = getProgression(countNumberOfProgression, randomNumber);
  const hideElement = hideElementInProgression(progression);
  const answer = progression[hideElement];
  progression[hideElement] = '..';
  return [progression.join(' '), String(answer)];
};

const playGameProgression = () => {
  doGame(text, madeDataForRound);
};

export default playGameProgression;
