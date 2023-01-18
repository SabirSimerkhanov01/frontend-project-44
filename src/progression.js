import readlineSync from 'readline-sync';

import start from './cli.js';

const nam = start();

function randomnum() {
  const fir = Math.round(Math.random() * 40);
  return fir;
}

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}

function pr() {
  const num = randomnum();
  const num2 = getRandomInRange(0, 9);
  const log = (`${num} ${num * 2} ${num * 3} ${num * 4} ${num * 5} ${num * 6} ${num * 7} ${num * 8} ${num * 9} ${num * 10} ${num * (num2 + 1)}`);
  const share = log.split(' ');
  share[num2] = '..';
  return share.join(' ');
}

function progression3() {
  let result;
  const prc = pr();
  const share = prc.split(' ');
  const changeNumber = share.slice(10);
  const allNumber = share.slice(0, 9);
  const allNumber2 = allNumber.join(' ');
  console.log(`Question: ${allNumber2}`);
  const answer = (`${readlineSync.question('Your answer: ')}`);
  if (Number(answer) === Number(changeNumber)) {
    result = 'Correct!';
  } if (Number(answer) !== Number(changeNumber)) {
    result = `${answer} is wrong answer ;(. Correct answer was ${changeNumber}\nLet's try again, ${nam}`;
  } console.log(result);
}

function progression2() {
  let result;
  const prc = pr();
  const share = prc.split(' ');
  const changeNumber = share.slice(10);
  const allNumber = share.slice(0, 9);
  const allNumber2 = allNumber.join(' ');
  console.log(`Question: ${allNumber2}`);
  const answer = (`${readlineSync.question('Your answer: ')}`);
  if (Number(answer) === Number(changeNumber)) {
    result = 'Correct!';
  } if (Number(answer) !== Number(changeNumber)) {
    result = `${answer} is wrong answer ;(. Correct answer was ${changeNumber}\nLet's try again, ${nam}`;
  } console.log(result);
  if (result === 'Correct!') {
    progression3();
  }
}

export default function progression() {
  let result;
  const prc = pr();
  const share = prc.split(' ');
  const changeNumber = share.slice(10);
  const allNumber = share.slice(0, 9);
  const allNumber2 = allNumber.join(' ');
  console.log('What number is missing in the progression?');
  console.log(`Question: ${allNumber2}`);
  const answer = (`${readlineSync.question('Your answer: ')}`);
  if (Number(answer) === Number(changeNumber)) {
    result = 'Correct!';
  } if (Number(answer) !== Number(changeNumber)) {
    result = `${answer} is wrong answer ;(. Correct answer was ${changeNumber}\nLet's try again, ${nam}`;
  } console.log(result);
  if (result === 'Correct!') {
    progression2();
  }
}

export {
  pr, randomnum, getRandomInRange, progression2, progression3,
};
