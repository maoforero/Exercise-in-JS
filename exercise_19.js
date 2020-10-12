let number = parseInt(prompt('Write a number: '))
let array = []

for(let i = 0; i < number+1; i++){
    array.push(i);
}

array.splice(1,0)

for(let j = 0;j < array.length; j++){
    console.log(array[j])
}