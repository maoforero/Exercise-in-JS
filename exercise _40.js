let person = {
    weigth : 65,
    height : 1.8,
    bmi : function(){
        return person.weigth / (person.height**2)
    }
}

console.log(person.bmi())