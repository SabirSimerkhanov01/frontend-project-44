const getRandomNum = (n = 100) => {
  const increaseTheRangeOfNumbers = n;
  const number = Math.round(Math.random() * increaseTheRangeOfNumbers);
  return number;
};

export default getRandomNum;
