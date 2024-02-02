import readLineSync from 'readline-sync';
import randomizer from '../src/randomizer.js';

const state = {
    name: '',
    numbers: '',
    sign: '',
    correctAnswer: '',
    currentAnswer: '',
    cycle: 0,
}

const getSign = () => {
    let signs = ['+', '-', '*'];
    let ordinalNum = randomizer(2, 1);
    return signs[ordinalNum];
};

const calc = (n1, sign, n2) => {
    switch (sign) {
        case '+':
            return n1 + n2;
        case '-':
            return n1 - n2;
        case '*':
            return n1 * n2;
    }
};

const cycle = () => {
    if (state.cycle === 3) {
        console.log(`Congratulations, ${state.name}!`);
        return;
    }
    state.cycle += 1;

    state.numbers = randomizer(50, 2);
    state.sign = getSign();
    state.correctAnswer = calc(state.numbers[0], state.sign, state.numbers[1]);

    console.log(`Question: ${state.numbers[0]} ${state.sign} ${state.numbers[1]}`)

    state.currentAnswer = readLineSync.question('Your answer: ');

    if (state.correctAnswer === Number(state.currentAnswer)) {
        console.log('Correct!');
        cycle();
    } else {
        console.log(`'${state.currentAnswer}' is wrong answer ;(. Correct answer was '${state.correctAnswer}'.\nLet's try again, ${state.name}!`)
    }
};

export default (name) => {
    state.name = name;

    console.log('What is the result of the expression?');

    cycle();
};
