import readLineSync from 'readline-sync'
import randomizer from '../src/randomizer.js';

const state = {
    name: '',
    randNum: 0,
    cycle: 0,
    correctAnswer: '',
}

const cycle = () => {
    if (state.cycle === 3) {
        console.log(`Congratulations, ${state.name}!`);
        return;
    }

    state.cycle += 1;
    state.randNum = randomizer(1000, 1);

    let arr = [];

    for (let i = 1; i <= state.randNum; i += 1) {
        if (Number.isInteger(state.randNum / i) === true) {
            arr.push(i);
        }
    }

    state.correctAnswer = state.randNum !== arr[1] && arr[0] === 1 ? 'yes' : 'no';

    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    console.log(`Question: ${state.randNum}`);

    let answer = readLineSync.question('Your answer: ');

    if (answer == state.correctAnswer) {
        console.log('Correct!');
        cycle();
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${state.correctAnswer}'.\nLet's try again, Sam!`);
    }
};

export default (name) => {
    state.name = name;
    cycle();
};
