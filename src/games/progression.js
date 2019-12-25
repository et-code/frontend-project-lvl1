import buildGameEngine from '..';
import generateValue from '../number-generator';

const description = 'What number is missing in the progression?';
const progressionLength = 10;
const generateProgression = () => {
  const firstElement = generateValue(1, 10);
  const step = generateValue(1, 5);
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    const nextElement = firstElement + i * step;
    progression.push(nextElement);
  }
  const hiddenElementIndex = generateValue(1, progressionLength - 1);
  const answer = progression.splice(hiddenElementIndex, 1, '..').toString();
  const question = progression.join(' ');
  return [question, answer];
};

export default () => buildGameEngine(generateProgression, description);
