#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from './index';

const isEven = (num) => ((num % 2 === 0) ? 'yes' : 'no');
let counter = 0;
const user = greeting();
const consoleLogResult = () => {
  if (counter === 3) {
    console.log(`Congratulations, ${user}!`);
    return '';
  }
  const random = Math.floor(Math.random() * (1000 - 1)) + 1;
  console.log(`Question: ${random}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === isEven(random)) {
    counter += 1;
    console.log('Correct!');
    consoleLogResult();
  } else if (answer !== isEven(random)) {
    console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.');
    console.log(`Let's try again, ${user}!`);
  }
  return '';
};

export default consoleLogResult;
