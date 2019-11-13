#!/usr/bin/env node
import templateOfGame from '../index';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => ((num % 2 === 0) ? 'yes' : 'no');

const logic = () => {
  const question = Math.floor(Math.random() * (1000 - 1)) + 1;
  const result = isEven(question);
  return [question, result];
};

export default () => templateOfGame(logic, description);
