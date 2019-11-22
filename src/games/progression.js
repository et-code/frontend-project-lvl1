#!/usr/bin/env node
import applyTemplateOfGame from '../index';
import getRandomNum from '../number-generator';

const description = 'What number is missing in the progression?';
const generateArrayOfNumbers = () => {
  let randomNum = getRandomNum(10, 1);
  const step = getRandomNum(5, 1);
  const arrayOfNumbers = [];
  const lengthOfArray = 10;
  for (let i = 0; i < lengthOfArray; i += 1) {
    arrayOfNumbers.push(randomNum);
    randomNum += step;
  }
  const indexOfArray = getRandomNum(8, 1);
  const answer = `${arrayOfNumbers.splice(indexOfArray, 1, '..')}`;
  const question = `${arrayOfNumbers.join(' ')}`;
  return [question, answer];
};

export default () => applyTemplateOfGame(generateArrayOfNumbers, description);
