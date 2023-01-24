import readlineSync from 'readline-sync';

export default function doGame(task, generateNumber) {
  let result;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(task);

  for (let i = 0; i < 3; i += 1) {
    const [question, answer] = generateNumber();
    const quest = `Question: ${question}`;
    console.log(quest);
    const answers = readlineSync.question('Your answer: ');
    if (String(answers) === String(answer)) {
      result = 'Correct!';
      console.log(result);
    } if (String(answers) !== String(answer)) {
      const falseAnswer = (`'${answers}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
      console.log(falseAnswer);
      return falseAnswer;
    } if (result === 'Correct!' && i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
}
