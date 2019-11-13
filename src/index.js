#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from './index-brain-games';

export default (logicOfGame, descriptionOfGame) => {
  let counter = 0;
  const user = greeting();
  console.log(descriptionOfGame);
  while (counter <= 3) {
    const questionAndResult = logicOfGame();
    if (counter === 3) {
      console.log(`Congratulations, ${user}!`);
      return '';
    }
    console.log(`Question: ${questionAndResult[0]}`);
    const correctAnswer = String(questionAndResult[1]);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      counter += 1;
      console.log('Correct!');
    } if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${user}!`);
      return '';
    }
  }
  return '';
};
