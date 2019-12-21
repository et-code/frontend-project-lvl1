#!/usr/bin/env node
import applyTemplateOfGame from '..';
import generate from '../number-generator';

const description = 'What number is missing in the progression?';
const progressionLength = 10;
const generateProgression = () => {
  const firstElement = generate(1, 10);
  const step = generate(1, 5);
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    const nextElement = firstElement + i * step;
    progression.push(nextElement);
  }
  const hiddenElementIndex = generate(1, progressionLength - 1);
  const answer = `${progression.splice(hiddenElementIndex, 1, '..')}`;
  const question = progression.join(' ');
  return [question, answer];
};

export default () => applyTemplateOfGame(generateProgression, description);
