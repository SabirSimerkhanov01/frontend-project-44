const getRandomNum = (min = 0, max = 1000) => {
  const result = Math.floor(Math.random() * (max - min + 1));
  return result;
};

export default getRandomNum;
