function buscarProducto (objeto, elemento){
    for (item of objeto){
        if(elemento == item.id){
            return item
        }else{
            return null
        }
    }
}


let productos = [{ id: 1, nombre: "A" }, { id: 2, nombre: "B" }]
console.log(buscarProducto(productos, 1))