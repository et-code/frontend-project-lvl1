#!/usr/bin/env node
import applyTemplateOfGame from '../index';
import getRandomNum from '../number-generator';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num === 2) {
    return true;
  }
  for (let i = num - 1; i > 1; i -= 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const applyOperation = () => {
  const randomNum = getRandomNum(30, 1);
  const question = `${randomNum}`;
  const answer = (isPrime(randomNum) ? 'yes' : 'no');
  return [question, answer];
};

export default () => applyTemplateOfGame(applyOperation, description);
