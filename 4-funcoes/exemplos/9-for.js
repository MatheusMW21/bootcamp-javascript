//for
function multiplicaPorDois(arr) {
    let multiplicados = [];

    for(let i = 0; i < arr.length; i++) {
        multiplicados.push(arr[i] * 2);
    }

    return multiplicados;
}

const meuNumeros = [3, 22, 231, 423, 30]; // [6, 44, 462, 846, 60]

console.log(multiplicaPorDois(meuNumeros));

// for...in

function forInExemplo(obj) {
    for(prop in obj) {
        console.log(prop);
    }
}

const meuObjeto = {
    nome: "Matt",
    idade: "18",
    cidade: "São Paulo"
}

console.log(forInExemplo(meuObjeto));
// nome
// idade
// cidade

function forInExemplo(obj) {
    for(prop in obj) {
        console.log(obj[prop]);
    }
}

const meuObjeto1 = {
    nome: "Matt",
    idade: "18",
    cidade: "São Paulo"
}

console.log(forInExemplo(meuObjeto));
// Matt
// 18
// São Paulo

// for...of
function logLetras(palavra) {
    for(letra of palavra) {
        console.log(letra)
    }
}

const palavra = "gato";

console.log(logLetras(palavra));
//g
//a
//t
//o