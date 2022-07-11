function filtraPares(arr) {
    if (!arr || !arr.length) return;
    
    const filteredArr = arr.filter((item) => item % 2 === 0);

    return filteredArr
}

console.log(filtraPares([8, 23, 42, 57, 89, 90]));