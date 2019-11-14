#!/usr/bin/env node
import templateOfGame from '../index';

const description = 'Find the greatest common divisor of given numbers.';
const operation = (a, b) => {
  const minNumber = (a < b) ? a : b;
  const maxNumber = (a > b) ? a : b;
  let resultNumber;
  for (let i = minNumber; i > 0; i -= 1) {
    if ((minNumber % i) === 0 && (maxNumber % i) === 0) {
      resultNumber = i;
      return resultNumber;
    }
  }
  return resultNumber;
};
const logic = () => {
  const randomNumber1 = Math.floor(Math.random() * (30 - 1)) + 1;
  const randomNumber2 = Math.floor(Math.random() * (30 - 1)) + 1;
  const question = `${randomNumber1} ${randomNumber2}`;
  const result = operation(randomNumber1, randomNumber2);
  return [question, result];
};

export default () => templateOfGame(logic, description);
