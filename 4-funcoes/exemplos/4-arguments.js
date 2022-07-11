function findMax () {
    let max = -Infinity;

    for(let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
 
console.log (findMax (23, 2, 4, 123, 2077, 1)); // 2077