//solução 1
function verificaPalindromo (string) {
    if(!string) return;

    return string.split("").reverse().join("") === string;
}

// solução 2 
// omo
// 012
// abba
// 0123
function verificaPalindromo(string) {
    if (!string) return "string inexistente";

    for(let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length - 1 - i]){
            return false;
        }
    }

    return true;
}

console.log(verificaPalindromo("abba"));







