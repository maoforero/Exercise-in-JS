function frecuencias(str){
    str = str.replace(/ /g, '').toLowerCase();
    freq = {}
    for(let i of str){
        if(freq[i]){
            freq[i] += 1
        }else {
            freq[i] = 1
        }
    }
    return(freq)
}

console.log(frecuencias("anita lava la tina"))
  // { a: 6, n: 2, i: 2, t: 2, l: 2, v: 1 }