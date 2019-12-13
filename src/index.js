#!/usr/bin/env node
import readlineSync from 'readline-sync';

export default (logicOfGame, descriptionOfGame) => {
  console.log('Welcome to the Brain games!');
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);
  console.log(descriptionOfGame);
  const correctAnswersCount = 3;
  for (let counter = 0; counter <= correctAnswersCount; counter += 1) {
    const questionAndResult = logicOfGame();
    if (counter === correctAnswersCount) {
      console.log(`Congratulations, ${user}!`);
      return;
    }
    console.log(`Question: ${questionAndResult[0]}`);
    const correctAnswer = String(questionAndResult[1]);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${user}!`);
      return;
    }
  }
};
