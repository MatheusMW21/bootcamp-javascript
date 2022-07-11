function getAnimal(id) {
    switch(id) {
        case 1:
            return "cão";
        case 2:
            return "gato";
        case 3:
            return "passáro";
        default:
            return "peixe";
    }
}

console.log(getAnimal(1)) //cão
console.log(getAnimal(2)) //gato
console.log(getAnimal("1")) // peixe, pq a string n está especificada nos cases, então retorna como "default".
