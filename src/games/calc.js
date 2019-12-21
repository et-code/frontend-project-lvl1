#!/usr/bin/env node
import applyTemplateOfGame from '..';
import generate from '../number-generator';

const description = 'What is the result of the expression?';
const arithmeticOperations = '+-*';
const calculateAnswer = (a, b, operator) => {
  switch (operator) {
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
  const operator = arithmeticOperations[generate(0, arithmeticOperations.length - 1)];
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const answer = calculateAnswer(firstOperand, secondOperand, operator);
  return [question, answer];
};

export default () => applyTemplateOfGame(getQuestionAndAnswer, description);
