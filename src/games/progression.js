#!/usr/bin/env node
import applyTemplateOfGame from '..';
import generate from '../number-generator';

const description = 'What number is missing in the progression?';
const lengthOfElement = 10;
const generateElements = () => {
  const firstElement = generate(1, 10);
  const step = generate(1, 5);
  const elements = [];
  for (let i = 0; i < lengthOfElement; i += 1) {
    const nextElement = firstElement + i * step;
    elements.push(nextElement);
  }
  const indexOfElement = generate(1, lengthOfElement - 1);
  const answer = `${elements.splice(indexOfElement, 1, '..')}`;
  const question = elements.join(' ');
  return [question, answer];
};

export default () => applyTemplateOfGame(generateElements, description);
