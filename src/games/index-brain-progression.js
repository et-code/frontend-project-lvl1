#!/usr/bin/env node
import templateOfGame from '../index';
import numberGenerator from '../number-generator';

const description = 'What number is missing in the progression?';
const logic = () => {
  let randomNumber = numberGenerator(10, 1);
  const step = numberGenerator(5, 1);
  const arrayOfNumbers = [randomNumber];
  const lengthOfArray = 9;
  for (let i = 0; i < lengthOfArray; i += 1) {
    randomNumber += step;
    arrayOfNumbers.push(randomNumber);
  }
  const indexOfArray = numberGenerator(8, 1);
  const result = `${arrayOfNumbers.splice(indexOfArray, 1, '..')}`;
  const question = `${arrayOfNumbers.join(' ')}`;
  return [question, result];
};

export default () => templateOfGame(logic, description);
