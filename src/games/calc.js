#!/usr/bin/env node
import applyTemplateOfGame from '../index';
import getRandomNum from '../number-generator';

const description = 'What is the result of the expression?';
const arithmeticOperations = '+-*';
const summarizeSubtractMultiply = (a, b, c) => {
  switch (b) {
    case '+':
      return a + c;
    case '-':
      return a - c;
    default:
      return a * c;
  }
};
const applyOperation = () => {
  const firstOperand = getRandomNum(100, 1);
  const secondOperand = getRandomNum(100, 1);
  const operator = arithmeticOperations[getRandomNum(3, 0)];
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const answer = summarizeSubtractMultiply(firstOperand, operator, secondOperand);
  return [question, answer];
};

export default () => applyTemplateOfGame(applyOperation, description);
