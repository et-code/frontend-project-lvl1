#!/usr/bin/env node
import applyTemplateOfGame from '..';
import generate from '../number-generator';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (value) => (value % 2 === 0);

const getQuestionAndAnswer = () => {
  const question = generate(1, 1000);
  const answer = (isEven(question) ? 'yes' : 'no');
  return [question, answer];
};

export default () => applyTemplateOfGame(getQuestionAndAnswer, description);
