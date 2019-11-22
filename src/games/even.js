#!/usr/bin/env node
import applyTemplateOfGame from '../index';
import getRandomNum from '../number-generator';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => (num % 2 === 0);

const applyOperation = () => {
  const question = getRandomNum(1000, 1);
  const answer = (isEven(question) ? 'yes' : 'no');
  return [question, answer];
};

export default () => applyTemplateOfGame(applyOperation, description);
