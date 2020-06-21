// Valores padrões definidos para os parâmetros. 

function soma(a = 3, b = 6) {
    return a + b;
}

console.log(soma(1)); // a = 1 + b = 6
console.log(soma()); // a = 3 + b = 6


// A mesma coisa do de cima, porém com a utilização da Arrow Function..
const soma = (a = 3, b = 6) => a + b;


console.log(soma(1)); // a = 1 + b = 6
console.log(soma()); // a = 3 + b = 6