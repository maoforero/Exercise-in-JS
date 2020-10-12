let str = prompt('Write Something: ')
str = str.split(' ')

for(let i = 0; i < str.length; i++){
    str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1,str[i].length)
}

console.log(str.join(' '))