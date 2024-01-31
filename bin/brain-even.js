import readlineSync from 'readline-sync';

const state = {
    name: '',
    number: '',
    trueAnswer: '',
    currentAnswer: '',
    cycle: 0,
};

const cycle = () => {
    if (state.cycle === 3) {
        console.log(`Congratulations, ${state.name}!`);
        return;
    }
    state.cycle += 1;

    state.number = Math.round(Math.random() * 75);

    console.log(`Question: ${state.number}`);

    state.trueAnswer = state.number % 2 === 0 && state.number !== 0 ? 'yes' : 'no';

    state.currentAnswer = readlineSync.question('Your answer: ');

    if (state.trueAnswer === state.currentAnswer) {
        console.log('Correct!');
        cycle();
    } else {
        console.log(`'${state.currentAnswer}' is wrong answer ;(. Correct answer was '${state.trueAnswer}'.\nLet's try again, ${state.name}!`)
    }
};

export default (name) => {
    state.name = name;
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    cycle();
};
