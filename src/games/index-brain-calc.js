#!/usr/bin/env node
import templateOfGame from '../index';

const description = 'What is the result of the expression?';
const applyOperation = (a, b, c) => {
  if (b === '+') {
    return a + c;
  }
  if (b === '-') {
    return a - c;
  }
  return a * c;
};
const logic = () => {
  const randomNumber1 = Math.floor(Math.random() * (100 - 1)) + 1;
  const randomNumber2 = Math.floor(Math.random() * (100 - 1)) + 1;
  const arithmeticOperations = '+-*';
  const randomOperation = arithmeticOperations[Math.floor(Math.random() * (3 - 0)) + 0];
  const question = `${randomNumber1} ${randomOperation} ${randomNumber2}`;
  const result = applyOperation(randomNumber1, randomOperation, randomNumber2);
  return [question, result];
};

export default () => templateOfGame(logic, description);
