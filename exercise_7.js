const numRandom = Math.floor(Math.random()* 11);

console.log('#######################');
console.log('Guess de random number');
let number = parseInt(prompt('Write a number'));

while (number != numRandom){
    number = parseInt(prompt('Nice try! do it again: '));
} 
console.log('Congrats, You did it!');
