let weigth = parseInt(prompt('Wiegth: '))
let heigth = parseInt(prompt('Heigth: '))

bmi(weigth,heigth)

function bmi (w,h){
    return (console.log(w/(h^2)))
}