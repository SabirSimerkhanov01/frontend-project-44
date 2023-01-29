export default function generateSign(n) {
  const array = ['+', '-', '*'];
  const generateNum = Math.floor(Math.random() * n);
  return array[generateNum];
}
