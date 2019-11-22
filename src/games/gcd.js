#!/usr/bin/env node
import applyTemplateOfGame from '../index';
import getRandomNum from '../number-generator';

const description = 'Find the greatest common divisor of given numbers.';
const getMaxCommonDivisor = (a, b) => {
  const minNum = (a < b) ? a : b;
  const maxNum = (a > b) ? a : b;
  let resultNum;
  for (let i = minNum; i > 0; i -= 1) {
    if ((minNum % i) === 0 && (maxNum % i) === 0) {
      resultNum = i;
      return resultNum;
    }
  }
  return resultNum;
};
const applyOperation = () => {
  const firstRandomNum = getRandomNum(30, 1);
  const secondRandomNum = getRandomNum(30, 1);
  const question = `${firstRandomNum} ${secondRandomNum}`;
  const answer = getMaxCommonDivisor(firstRandomNum, secondRandomNum);
  return [question, answer];
};

export default () => applyTemplateOfGame(applyOperation, description);
