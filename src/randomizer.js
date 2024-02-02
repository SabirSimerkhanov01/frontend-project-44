export default (level, count) => {
    let result = [];
    for (let i = 0; i < count; i += 1) {
        result.push(Math.round(Math.random() * level));
    }
    return count === 1 ? result[0] : result;
}
