let str = prompt('Write something: ');
str = str.toLowerCase();

while(str != 'salir'){
    console.log(str)
    str = prompt('Write something new: ');
}
console.log('Good Bye...');