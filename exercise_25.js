let str = prompt('Write something: ')
str = str.toLowerCase().split("")

for(let i = 0; i < str.length; i++){
  // console.log(str[i])
    if(str[i] === 'a'){
        str[i] = '4';
    } else if (str[i] === 'e'){
        str[i] = '3';
    } else if (str[i] === 'i'){
        str[i] = '1';
    } else if (str[i] === 'o'){
        str[i] = '0';
    }
}

console.log(str.join(" ").replace(/ /g,''))