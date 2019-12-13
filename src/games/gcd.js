#!/usr/bin/env node
import applyTemplateOfGame from '..';
import generate from '../number-generator';

const description = 'Find the greatest common divisor of given numbers.';
const gcd = (a, b) => {
  const minOperand = (a < b) ? a : b;
  const maxOperand = (a > b) ? a : b;
  let result;
  for (let i = minOperand; i > 0; i -= 1) {
    if ((minOperand % i) === 0 && (maxOperand % i) === 0) {
      result = i;
      return result;
    }
  }
  return result;
};
const getQuestionAndAnswer = () => {
  const firstOperand = generate(1, 30);
  const secondOperand = generate(1, 30);
  const question = `${firstOperand} ${secondOperand}`;
  const answer = gcd(firstOperand, secondOperand);
  return [question, answer];
};

export default () => applyTemplateOfGame(getQuestionAndAnswer, description);
