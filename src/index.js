#!/usr/bin/env node
import readlineSync from 'readline-sync';

const correctAnswersCount = 3;
export default (generateLogicOfGame, descriptionOfGame) => {
  console.log('Welcome to the Brain games!');
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);
  console.log(descriptionOfGame);
  for (let counter = 1; counter <= correctAnswersCount; counter += 1) {
    const questionAndResult = generateLogicOfGame();
    console.log(`Question: ${questionAndResult[0]}`);
    const correctAnswer = String(questionAndResult[1]);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${user}!`);
      return;
    }
  }
  console.log(`Congratulations, ${user}!`);
};
