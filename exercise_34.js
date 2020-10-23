let array = [1,2,3,4,5]

function promedio (prom){
    let result = 0;
    for(let i = 0; i < prom.length; i++){
        result += prom[i] / prom.length
    }
    return result
}

console.log(promedio([300, 100, 1000, 250]))