import readlineSync from 'readline-sync';

import start from './cli.js';

const nam = start();

function randomnum() {
  const fir = Math.round(Math.random() * 65);
  return fir;
}

function generalshare(a, b) {
  let num1 = a;
  let num2 = b;
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  } return num1 + num2;
}

function nod3() {
  let result;
  const rannum1 = randomnum();
  const rannum2 = randomnum();
  console.log(`Question: ${rannum1} ${rannum2}`);
  const answ = (`${readlineSync.question('Your answer: ')}`);
  const gengershare = generalshare(rannum1, rannum2);
  if (Number(answ) !== Number(gengershare)) {
    result = `'${answ}' is wrong answer ;(. Correct answer was '${gengershare}'.\nLet\`s try again, ${nam}`;
  } if (Number(answ) === Number(gengershare)) {
    result = `Congratulations, ${nam}`;
  } console.log(result);
}

function nod2() {
  let result;
  const rannum1 = randomnum();
  const rannum2 = randomnum();
  console.log(`Question: ${rannum1} ${rannum2}`);
  const answ = (`${readlineSync.question('Your answer: ')}`);
  const gengershare = generalshare(rannum1, rannum2);
  if (Number(answ) !== Number(gengershare)) {
    result = `'${answ}' is wrong answer ;(. Correct answer was '${gengershare}'.\nLet\`s try again, ${nam}`;
  } if (Number(answ) === Number(gengershare)) {
    result = 'Correct!';
  } console.log(result);
  if (result === 'Correct!') {
    nod3(result);
  }
}

export default function nod() {
  let result;
  const rannum1 = randomnum();
  const rannum2 = randomnum();
  console.log('Find the greatest common divisor of given numbers.');
  console.log(`Question: ${rannum1} ${rannum2}`);
  const answ = (`${readlineSync.question('Your answer: ')}`);
  const gengershare = generalshare(rannum1, rannum2);
  if (Number(answ) !== Number(gengershare)) {
    result = `'${answ}' is wrong answer ;(. Correct answer was '${gengershare}'.\nLet\`s try again, ${nam}`;
  } if (Number(answ) === Number(gengershare)) {
    result = 'Correct!';
  } console.log(result);
  if (result === 'Correct!') {
    nod2(result);
  }
}

export {
  generalshare, nod2, nod3, randomnum,
};
