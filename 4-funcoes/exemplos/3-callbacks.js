const calc = function(operacao, num1, num2){
    return operacao(num1, num2);
}

const soma = function(num1, num2) {
    return num1 + num2;
}

const sub = function(num1, num2) {
    return num1 - num2;
}

const resultSoma = calc(soma, 15, 25);
const resultSub = calc(sub, 15, 25);

console.log(resultSoma)//40
console.log(resultSub);//-10