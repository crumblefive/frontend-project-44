import { getRandomNumber, gameLogic } from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (numb1, numb2) => {
  if (numb2 === 0) {
    return numb1;
  }

  return getGreatestCommonDivisor(numb2, numb1 % numb2);
};

const generateRoundData = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);

  const question = `${num1} ${num2}`;
  const correctAnswer = `${getGreatestCommonDivisor(num1, num2)}`;

  return [question, correctAnswer];
};

const nodGame = () => gameLogic(gameRules, generateRoundData);

export default nodGame;
