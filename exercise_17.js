const numRandom = Math.floor(Math.random()*100);
console.log(numRandom)

let numUser = parseInt(prompt('Guess the number: '));

while(numUser != numRandom){
    numUser = parseInt(prompt('Try Again: '));
}

console.log(`Congrats! The Secret number is ${numRandom}`)