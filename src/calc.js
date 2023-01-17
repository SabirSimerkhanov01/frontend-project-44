import readlineSync from 'readline-sync';

import start from './cli.js';

const nam = start();

function randomnum() {
  const num = Math.random();
  const pop = num * 65;
  const fir = Math.round(pop);
  return fir;
}

function generatorSign1(n) {
  return Math.floor(Math.random() * n);
}

function generatorSign2() {
  let result;
  const num = generatorSign1(3);
  if (num === 0) {
    result = '+';
  } if (num === 1) {
    result = '-';
  } if (num === 2) {
    result = '*';
  } return result;
}

function doit(a, b, c) {
  let result;
  const one = Number(a);
  const sec = Number(c);
  if (b === '+') {
    result = (one + sec);
  } if (b === '-') {
    result = (one - sec);
  } if (b === '*') {
    result = (one * sec);
  } return result;
}

function calcul3(word) {
  let result;
  const genNum1 = randomnum();
  const genNum2 = randomnum();
  const genSign = generatorSign2();
  const sum = (`${genNum1} ${genSign} ${genNum2}`);
  const share = sum.split(' ');
  const num1 = share[0];
  const num2 = share[2];
  const sign = share[1];
  const example1 = doit(num1, sign, num2);
  if (word === 'Correct!') {
    console.log(`Question: ${sum}`);
    const named = readlineSync.question('Your answer: ');
    if (Number(named) !== Number(example1)) {
      result = `'${named}' is wrong answer ;(. Correct answer was '${example1}')`;
    } if (Number(named) === Number(example1)) {
      result = 'Correct!';
    }
  } console.log(result);
  if (result === 'Correct!') {
    console.log(`Congratulations, ${nam}`);
  }
}

function calcul2(word) {
  let result;
  const genNum1 = randomnum();
  const genNum2 = randomnum();
  const genSign = generatorSign2();
  const sum = (`${genNum1} ${genSign} ${genNum2}`);
  const share = sum.split(' ');
  const num1 = share[0];
  const num2 = share[2];
  const sign = share[1];
  const example1 = doit(num1, sign, num2);
  if (word === 'Correct!') {
    console.log(`Question: ${sum}`);
    const named = readlineSync.question('Your answer: ');
    if (Number(named) !== Number(example1)) {
      result = `'${named}' is wrong answer ;(. Correct answer was '${example1}')`;
    } if (Number(named) === Number(example1)) {
      result = 'Correct!';
    }
  } console.log(result);
  if (result === 'Correct!') {
    calcul3(result);
  }
}

export default function calcul() {
  let result;
  const gennum1 = randomnum();
  const gennum2 = randomnum();
  const genSign = generatorSign2();
  const sum = (`${gennum1} ${genSign} ${gennum2}`);
  const share = sum.split(' ');
  const num1 = share[0];
  const num2 = share[2];
  const sign = share[1];
  const example1 = doit(num1, sign, num2);
  console.log('What is the result of the expression?');
  console.log(`Question: ${sum}`);
  const named = readlineSync.question('Your answer: ');
  if (Number(named) !== Number(example1)) {
    result = `'${named}' is wrong answer ;(. Correct answer was '${example1}')`;
  } if (Number(named) === Number(example1)) {
    result = 'Correct!';
  } console.log(result);
  if (result === 'Correct!') {
    calcul2(result);
  }
}

export {
  generatorSign1, generatorSign2, doit, calcul2, calcul3,
};
