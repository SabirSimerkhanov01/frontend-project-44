function randomNum() {
  const num = Math.random();
  const pop = num * 50;
  const fir = Math.round(pop);
  return fir;
}

function answer(a) {
  let result;
  if (a === 'yes') {
    result = 'yes';
  } if (a === 'no') {
    result = 'no';
  } return result;
}

function checkNumber(n) {
  let result;
  if (n % 2 === 0) {
    result = 'yes';
  } else {
    result = 'no';
  } return result;
}

function game() {
  let result;
  const fir = randomNum();
  const pop = answer();
  const sec = checkNumber(fir);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  console.log(`Question: ${fir}`);
  console.log(`Your answer: ${pop}`);
  if (pop === sec) {
    result = 'Correct!';
  } if (pop !== sec) {
    result = `'${pop}' is wrong answer ;(. Correct answer was '${sec}'`;
  } return result;
}

export {
  game, randomNum, answer, checkNumber,
};
