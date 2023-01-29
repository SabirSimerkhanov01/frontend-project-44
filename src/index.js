import readlineSync from 'readline-sync';

export default function doGame(task, madeDataForRound) {
  let result;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(task);

  const numberOfRounds = 3;
  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, answer] = madeDataForRound();
    console.log(`Question: ${question}`);
    const yourAnswer = readlineSync.question('Your answer: ');
    if (yourAnswer === answer) {
      result = 'Correct!';
      console.log(result);
    } if (yourAnswer !== answer) {
      console.log(`'${yourAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
      break;
    } if (result === 'Correct!' && i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
}
