#!/usr/bin/env node
import applyTemplateOfGame from '..';
import generate from '../number-generator';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (value) => {
  const startElement = 2;
  if (value < startElement) {
    return false;
  }
  const divisor = ((value / 2) >= startElement) ? (value / 2) : value;
  for (let i = startElement; i <= divisor; i += 1) {
    if (value === 2) {
      return true;
    }
    if ((value % i === 0) || ((value % i === 0) && (value === i))) {
      return false;
    }
  }
  return true;
};
const getQuestionAndAnswer = () => {
  const question = generate(1, 30);
  const answer = (isPrime(question) ? 'yes' : 'no');
  return [question, answer];
};

export default () => applyTemplateOfGame(getQuestionAndAnswer, description);