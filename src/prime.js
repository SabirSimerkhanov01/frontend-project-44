import readlineSync from 'readline-sync';

import start from './cli.js';

const list = '2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97 101 103 107 109 113 127 131 137 139 149 151 157 163 167 173 179 181 191 193 197 199 211 223 227 229 233 239 241 251';

const just = list.split(' ');

const nam = start();

function check(a, b) {
  let result;
  for (let i = 0; i < b.length; i += 1) {
    if (a === Number(b[i])) {
      result = 'yes';
    } if (result === undefined) {
      result = 'no';
    }
  } return result;
}

function yesno(word) {
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

function prime3() {
  let result;
  const randomnumber = getRandomInRange(0, 251);
  console.log(`Question: ${randomnumber}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === check(randomnumber, just)) {
    result = `Congratulations, ${nam}!`;
  } if (answer !== check(randomnumber, just)) {
    result = `'${answer}' is wrong answer ;(. Correct answer was '${yesno(answer)}'.`;
  } console.log(result);
}

function prime2() {
  let result;
  const randomnumber = getRandomInRange(0, 251);
  console.log(`Question: ${randomnumber}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === check(randomnumber, just)) {
    result = 'Correct!';
  } if (answer !== check(randomnumber, just)) {
    result = `'${answer}' is wrong answer ;(. Correct answer was '${yesno(answer)}'.`;
  } console.log(result);
  if (result === 'Correct!') {
    prime3(result);
  }
}

export default function prime() {
  let result;
  const randomnumber = getRandomInRange(0, 251);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  console.log(`Question: ${randomnumber}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === check(randomnumber, just)) {
    result = 'Correct!';
  } if (answer !== check(randomnumber, just)) {
    result = `'${answer}' is wrong answer ;(. Correct answer was '${yesno(answer)}'.`;
  } console.log(result);
  if (result === 'Correct!') {
    prime2(result);
  }
}

export {
  getRandomInRange, check, yesno, prime2, prime3,
};
