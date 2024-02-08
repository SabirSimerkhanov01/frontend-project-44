import randomizer from '../src/randomizer.js';
import limitRandomizer from '../src/limitRandom.js';
import readlineSync from 'readline-sync'

const state = {
    name: '',
    cycle: 0,
    step: 0,
    numbers: [],
    serHidNum: 0,
};

const cycle = () => {
    if (state.cycle === 3) {
        console.log(`Congratulations, ${state.name}!`);
        return;
    }

    state.cycle += 1;
    state.numbers = [];
    state.step = randomizer(25, 1);
    state.serHidNum = limitRandomizer(0, 9);


    let startedSerNum = randomizer(25, 1);

    for (let i = startedSerNum; i <= state.step * 9 + startedSerNum; i += state.step) {
        state.numbers.push(i);
    }

    let numWithHidden = [...state.numbers];
    numWithHidden[state.serHidNum] = '...';

    console.log('What number is missing in the progression?')
    console.log(`Question: ${numWithHidden.join(' ')}`);

    let answer = readlineSync.question('Your answer: ');

    if (answer == state.numbers[state.serHidNum]) {
        console.log('Correct!');
        cycle();
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${state.numbers[state.serHidNum]}'.\nLet's try again, Sam!`);
    }
};

export default (name) => {
    state.name = name;
    cycle();
};
