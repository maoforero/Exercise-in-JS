let weight = parseInt(prompt('Write your weight'));
let height = parseInt(prompt('Write your height'));

const bmi = (weight/(height^2));
console.log(bmi)

if ((bmi >=  18.5) && (bmi < 24.9)){
    console.log('Normal');
} else if (bmi < 18.5){
    console.log('Low weight');
} else if ((bmi >= 25) && (bmi < 29.9)){
    console.log('Overweight');
} else if (bmi >= 30){
    console.log('Obese')
}
