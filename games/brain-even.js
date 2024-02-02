import readLineSync from 'readline-sync';
import randomizer from '../src/randomizer.js';

const state = {
    cycle: 0,
    name: '',
    question: '',
    trueAnswer: '',
    currentAnswer: '',
}

const cycle = () => {
    if (state.cycle === 3) {
        console.log(`Congratulations, ${state.name}!`);
        return;
    }

    state.cycle += 1;

    state.question = randomizer(50, 1);
    console.log(`Question: ${state.question}`);
    state.trueAnswer = state.question % 2 === 0 && state.question !== 0 ? 'yes' : 'no';
    state.currentAnswer = readLineSync.question('Your answer: ');

    if (state.trueAnswer === state.currentAnswer) {
        console.log('Correct!');
        cycle();
    } else {
        console.log(`'${state.currentAnswer}' is wrong answer ;(. Correct answer was '${state.trueAnswer}'.\nLet's try again, Sam!`)
    }
}

export default (name) => {
    state.name = name;

    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    cycle();
};
