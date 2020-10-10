let num = parseInt(prompt('Write a number multiple of five: '))

if ( num % 5 != 0){
    console.log('No, this number ins\'t multiple of five');
} else {
    console.log(`Yes, the number ${num} is multiple of five!`);
}