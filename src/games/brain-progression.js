import doGame from '../index.js';

import getRandomNum from '../getRandomNumber.js';

const textForQuestion = 'What number is missing in the progression?';

const countNumberOfProgression = 10;

const getProgression = (progressionCount, randomNum) => {
  const result = [];
  for (let i = randomNum; i < randomNum + progressionCount; i += 1) {
    result.push(randomNum * i);
  }
  return result;
};

const hideElementInProgression = (progression) => {
  const lengthProgression = progression.length - 1;
  const hideElement = getRandomNum(0, lengthProgression);
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
  doGame(textForQuestion, madeDataForRound);
};

export default playGameProgression;
