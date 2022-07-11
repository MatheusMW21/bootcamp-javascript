const orange = {
    price: 3,
};

const apple = {
    price: 1.5,
};

function mapArray() {
    const array = [1, 2, 3, 4, 5];

    return array.map(function (item) {
        return item * this.price;
    }, apple);
}

console.log('this -> apple', mapArray(apple));
console.log('this -> orange', mapArray(orange));