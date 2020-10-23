let user_str = prompt('Tell me Something: ')
user_str = user_str.split(' ')

function capitalizar(str){
    for (let i = 0; i < str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1,str.length)
    }
    console.log(str.join(' '))
}

capitalizar(user_str)