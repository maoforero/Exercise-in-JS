let str1 = prompt('Phrase 1: ')
let str2 = prompt('Phrase 2: ')
let array = []

str1 = str1.toLowerCase().split('')
str2 = str2.toLowerCase().split('')

// console.log(str1)
// console.log(str2)

for(let i = 0; i < str1.length; i++){
    for (let j = 0; j < str2.length; j++){
        if(str1[i] === str2[j]){
            if(array.indexOf(str1[i]) == -1)
      // console.log(str1[i])
            array.push(str1[i])
      // console.log(array)
        }
    }
}

console.log(array)

if( array.length > 0){
    console.log(`Los Caracteteres son ${array}`)
} else {
    console.log('No hay Caracteteres repetidos')
}
