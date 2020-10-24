function hi (person){
    console.log('Hi ' + person.name + ',' + ' You are ' + person.age + ' years old')
}

let person = {
    name: 'Mao',
    age: 25
}

console.log(hi(person))