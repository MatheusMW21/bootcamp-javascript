function numeroPositivo(num) {
    let resultado;

    if(num < 0) {
        resultado = false;
    } else {
        resultado = true;
    }
    
    return resultado;
}

console.log(numeroPositivo(2)); //true
console.log(numeroPositivo(-66)); //false

// else if

function numeroPositivo(num) {
    const ehNegativo = num < 0;
    const maiorQueDez = num > 10;

    if(ehNegativo) {
        return "Esse número é negativo!";
    } else if (!ehNegativo && maiorQueDez) {
        return "Esse número é positivo e maior que 10!"
    }

    return "Esse é positivo!";
}

console.log(numeroPositivo(50)); //Esse número é positivo e maior que 10!
console.log(numeroPositivo(-25)); //Esse número é negativo!

