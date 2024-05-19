import { getRandomNumber, gameLogic } from '../index.js';

const gameRules = 'What is the result of the expression?';

const operands = ['+', '-', '*'];

const getQuestion = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const generateRoundData = () => {
  const num1 = getRandomNumber(1, 25);
  const num2 = getRandomNumber(1, 25);
  const randomOperator = operands[getRandomNumber(0, operands.length - 1)];
  const question = `${num1} ${randomOperator} ${num2}`;
  const correctAnswer = `${getQuestion(num1, randomOperator, num2)}`;
  return [question, correctAnswer];
};

const calcGame = () => gameLogic(gameRules, generateRoundData);

export default calcGame;
