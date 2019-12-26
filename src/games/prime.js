import buildGameEngine from '..';
import generateRandomInt from '../number-generator';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (value) => {
  const startElement = 2;
  if (value < startElement) {
    return false;
  } if ((value === 2) || (value === 3)) {
    return true;
  }
  const divisor = value / 2;
  for (let i = startElement; i <= divisor; i += 1) {
    if (value % i === 0) {
      return false;
    }
  }
  return true;
};
const getQuestionAndAnswer = () => {
  const question = generateRandomInt(1, 30);
  const answer = (isPrime(question) ? 'yes' : 'no');
  return [question, answer];
};

export default () => buildGameEngine(getQuestionAndAnswer, description);
