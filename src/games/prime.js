#!/usr/bin/env node
import applyTemplateOfGame from '../index';
import generate from '../number-generator';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (number) => {
  const startElement = 2;
  if (number < startElement) {
    return false;
  }
  const divisor = ((number / 2) >= startElement) ? (number / 2) : number;
  for (let i = startElement; i <= divisor; i += 1) {
    if (number === 2) {
      return true;
    }
    if ((number % i === 0) || ((number % i === 0) && (number === i))) {
      return false;
    }
  }
  return true;
};
const getQuestionAndAnswer = () => {
  const operand = generate(1, 30);
  const question = `${operand}`;
  const answer = (isPrime(operand) ? 'yes' : 'no');
  return [question, answer];
};

export default () => applyTemplateOfGame(getQuestionAndAnswer, description);
