function descifrar (str, obj){
    for(let k in obj){
        str = str.replace(k, obj[k])
    }
    return str
}
  console.log(descifrar("h0l4", { 0: "o", 4: "a" })) // "hola"