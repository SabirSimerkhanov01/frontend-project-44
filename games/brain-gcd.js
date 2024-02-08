import readLineSync from 'readline-sync';
import randomizer from '../src/randomizer.js';

const state = {
    name: '',
    numbers: '',
    correctAnswer: 0,
    currentAnswer: 0,
    cycle: 0,
};

const cycle = () => {
    if (state.cycle === 3) {
        console.log(`Congratulations, ${state.name}!`);
        return;
    }

    console.log('Find the greatest common divisor of given numbers.');

    state.cycle += 1;

    state.numbers = randomizer(250, 2);

    let firstNumber = state.numbers[0];
    let secondNumber = state.numbers[1];

    console.log(`Question: ${firstNumber} ${secondNumber}`);

    let firstDividers = [];
    let secondDividers = [];

    if (state.numbers.includes(1)) {
        state.correctAnswer = 1;
    } else {
        for (let i = 0; i < firstNumber; i += 1) {
            if (firstNumber % i === 0) {
                firstDividers.push(i);
            }
        }
    
        for (let i = 0; i < secondNumber; i += 1) {
            if (secondNumber % i === 0) {
                secondDividers.push(i);
            }
        }
    
        let commons = [...firstDividers, ...secondDividers].sort();
        let largCD = [];
        for (let i = 0; i < commons.length; i += 1) {
            if (commons[i] === commons[i + 1]) {
                largCD.push(commons[i]);
            }
        }
    
        state.correctAnswer = largCD[largCD.length - 1];
    }

    state.currentAnswer = Number(readLineSync.question('Your answer: '));

    if (state.correctAnswer === state.currentAnswer) {
        console.log('Correct!');
        cycle()
    } else {
        console.log(`'${state.currentAnswer}' is wrong answer ;(. Correct answer was '${state.correctAnswer}'.\nLet's try again, Sam!`)
    }
};

export default (name) => {
    state.name = name;
    cycle();
};
