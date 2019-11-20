#!/usr/bin/env node
import readlineSync from 'readline-sync';

export default (logicOfGame, descriptionOfGame) => {
  let counter = 0;
  console.log('Welcome to the Brain games!');
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);
  console.log(descriptionOfGame);
  while (counter <= 3) {
    const questionAndResult = logicOfGame();
    if (counter === 3) {
      console.log(`Congratulations, ${user}!`);
      break;
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
      break;
    }
  }
};
