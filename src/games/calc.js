#!/usr/bin/env node
import applyTemplateOfGame from '../index';
import generate from '../number-generator';

const description = 'What is the result of the expression?';
const arithmeticOperations = '+-*';
const amountOfArithmeticOperations = 3;
const summarizeOrSubtractOrMultiply = (a, b, c) => {
  switch (c) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    default:
      return a * b;
  }
};
const getQuestionAndAnswer = () => {
  const firstOperand = generate(1, 100);
  const secondOperand = generate(1, 100);
  const operator = arithmeticOperations[generate(0, amountOfArithmeticOperations)];
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const answer = summarizeOrSubtractOrMultiply(firstOperand, secondOperand, operator);
  return [question, answer];
};

export default () => applyTemplateOfGame(getQuestionAndAnswer, description);
