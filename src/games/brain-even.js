import doGame from '../index.js';

import getRandomNum from '../getRandomNumber.js';

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

export default function playGameEven() {
  doGame('Answer "yes" if the number is even, otherwise answer "no".', generateNumber);
}
