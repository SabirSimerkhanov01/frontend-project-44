const limitRandomizer = (min = 0, max = 10) => {
    let randomNumber = Math.round(Math.random() * max);
    if (randomNumber < min) {
        limitRandomizer(min, max);
    } else {
        return randomNumber;
    }
};

export default limitRandomizer;
