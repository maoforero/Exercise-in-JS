let nombres = ['Pedro', 'Pablo', 'Maria', 'Juan', 'Diana'];

let nombreUser = prompt('What is your name? ');
nombres.push(nombreUser);
console.log(nombres)

nombres.splice(2,1);

nombreUser = prompt('Insert a different name:');
nombres.splice(2,0, nombreUser);

console.log(nombres)
