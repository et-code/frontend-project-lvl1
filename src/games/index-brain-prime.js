#!/usr/bin/env node
import templateOfGame from '../index';
import numberGenerator from '../number-generator';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num === 2) {
    return 'yes';
  }
  for (let i = num - 1; i > 1; i -= 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};
const logic = () => {
  const randomNumber = numberGenerator(30, 1);
  const question = `${randomNumber}`;
  const result = isPrime(randomNumber);
  return [question, result];
};

export default () => templateOfGame(logic, description);
