const locState = {
    cycle: 0,
    name: '',
    question: '',
}


export default (state) => {
    if (locState.cycle === 3) {
        console.log(`Congratulations, ${state.name}!`);
        return;
    }
    locState.cycle += 1;

    locState.question = state.question;
};
