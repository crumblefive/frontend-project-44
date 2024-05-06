import { getRandomNumber, gameLogic } from '../index.js';

const gameRules = 'What number is missing in the progression?';
const getProgression = (firstItem, step, length) => {
  const array = [];
  for (let i = 0; i < length; i += 1) {
    const result = (firstItem + (step * i));
    array.push(result);
  }
  return array;
};

const generateRoundData = () => {
  const first = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 10);
  const progression = getProgression(first, step, length);
  const randomIndex = Math.floor(Math.random() * progression.length);
  const correctAnswer = `${progression[randomIndex]}`;
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

const progressionGame = () => gameLogic(gameRules, generateRoundData);

export default progressionGame;
