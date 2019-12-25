import buildGameEngine from '..';
import generateValue from '../number-generator';

const description = 'Find the greatest common divisor of given numbers.';
const gcd = (a, b) => {
  const minOperand = Math.min(a, b);
  const maxOperand = Math.max(a, b);
  let result;
  for (let i = minOperand; i > 0; i -= 1) {
    if ((minOperand % i) === 0 && (maxOperand % i) === 0) {
      result = i;
      return result;
    }
  }
  return result;
};
const getQuestionAndAnswer = () => {
  const firstOperand = generateValue(1, 30);
  const secondOperand = generateValue(1, 30);
  const question = `${firstOperand} ${secondOperand}`;
  const answer = gcd(firstOperand, secondOperand);
  return [question, answer];
};

export default () => buildGameEngine(getQuestionAndAnswer, description);
