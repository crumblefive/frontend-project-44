import readlineSync from 'readline-sync';
console.log("Welcome to the Brain games!")
const name = readlineSync.question('May I have your name?: ');
console.log('Hello, '+ name + '!');
export default name;
