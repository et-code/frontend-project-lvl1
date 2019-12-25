import buildGameEngine from '..';
import generateValue from '../number-generator';

const description = 'What is the result of the expression?';
const arithmeticOperations = '+-*';
const calculateAnswer = (a, b, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    default:
  }
  return result;
};
const getQuestionAndAnswer = () => {
  const firstOperand = generateValue(1, 100);
  const secondOperand = generateValue(1, 100);
  const operator = arithmeticOperations[generateValue(0, arithmeticOperations.length - 1)];
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const answer = calculateAnswer(firstOperand, secondOperand, operator);
  return [question, answer];
};

export default () => buildGameEngine(getQuestionAndAnswer, description);
