#!/usr/bin/env node
import templateOfGame from '../index';
import numberGenerator from '../number-generator';

const description = 'What is the result of the expression?';
const arithmeticOperations = '+-*';
const applyOperation = (a, b, c) => {
  switch (b) {
    case '+':
      return a + c;
    case '-':
      return a - c;
    default:
      return a * c;
  }
};
const logic = () => {
  const randomNumber1 = numberGenerator(100, 1);
  const randomNumber2 = numberGenerator(100, 1);
  const randomOperation = arithmeticOperations[numberGenerator(3, 0)];
  const question = `${randomNumber1} ${randomOperation} ${randomNumber2}`;
  const result = applyOperation(randomNumber1, randomOperation, randomNumber2);
  return [question, result];
};

export default () => templateOfGame(logic, description);
