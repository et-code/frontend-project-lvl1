#!/usr/bin/env node
import applyTemplateOfGame from '../index';
import generate from '../number-generator';

const description = 'What number is missing in the progression?';
const generateElements = () => {
  const firstElement = generate(1, 10);
  const step = generate(1, 5);
  const elements = [];
  const lengthOfElements = 10;
  for (let i = 0; i < lengthOfElements; i += 1) {
    const nextElement = firstElement + i * step;
    elements.push(nextElement);
  }
  const indexOfElements = generate(1, 8);
  const answer = `${elements.splice(indexOfElements, 1, '..')}`;
  const question = `${elements.join(' ')}`;
  return [question, answer];
};

export default () => applyTemplateOfGame(generateElements, description);
