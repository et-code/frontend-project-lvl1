#!/usr/bin/env node
import templateOfGame from '../index';

const description = 'What number is missing in the progression?';
const logic = () => {
  let randomNumber = Math.floor(Math.random() * (10 - 1)) + 1;
  const step = Math.floor(Math.random() * (5 - 1)) + 1;
  const arrayOfNumbers = [randomNumber];
  for (let i = 0; i < 9; i += 1) {
    randomNumber += step;
    arrayOfNumbers.push(randomNumber);
  }
  const indexOfArray = Math.floor(Math.random() * (8 - 1)) + 1;
  const result = `${arrayOfNumbers.splice(indexOfArray, 1, '..')}`;
  const question = `${arrayOfNumbers.join(' ')}`;
  return [question, result];
};

export default () => templateOfGame(logic, description);
