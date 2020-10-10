let num = parseInt(prompt('Write a number: '));

if ((num % 5 == 0) && (num % 3 == 0)){
    console.log('Bingbong');
} else if(num % 5 == 0){
    console.log('Bong');
} else if (num % 3 == 0){
    console.log('Bing');
} else {
    console.log(num);
}