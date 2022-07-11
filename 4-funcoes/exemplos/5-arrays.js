// spread

function sum(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers)); //6

// rest

function confereTamanho(...args) {
    console.log(args.length)
}

confereTamanho() //0
confereTamanho(1, 2) //2
confereTamanho(5, 542, 222) //3