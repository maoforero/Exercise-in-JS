let str = prompt('Write something')
str = str.toLowerCase()
let cont = 0

for (let i = 0; i < str.length; i++){
    if (str[i]=== 'a'){
        cont += 1
    }
}

console.log(`The sentece have ${cont} "a" characters`)