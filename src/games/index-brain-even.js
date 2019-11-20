#!/usr/bin/env node
import templateOfGame from '../index';
import numberGenerator from '../number-generator';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => (num % 2 === 0);

const logic = () => {
  const question = numberGenerator(1000, 1);
  const result = (isEven(question) ? 'yes' : 'no');
  return [question, result];
};

export default () => templateOfGame(logic, description);
