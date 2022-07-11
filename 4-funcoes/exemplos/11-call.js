const pessoa = {
    nome: 'Matheus',
};

const animal = {
    nome: 'Frederico',
};

function getSomething() {
    console.log(this.nome);
}

console.log(getSomething.call(pessoa)); //Matheus
console.log(getSomething.call(animal)); //Frederico


//bind
const retornaNomes = function () {
    return this.nome
};

let clarice = retornaNomes.bind({ nome: 'Clarice' });

console.log(clarice()); //Clarice