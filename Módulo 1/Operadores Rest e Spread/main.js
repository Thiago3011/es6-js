// Para utilizar os operadores Rest e Spread, terá que adicionar um novo plugin ao babel com o seguinte código no terminal: yarn add @babel/plugin-proposal-object-rest-spread
// Além de adicionarum código no babel.rc: "plugins": ["@babel/plugin-proposal-object-rest-spread"]


// Rest - atribui o resto de um objeto para uma variável

const usuario = {
    nome:"Diego",
    idade: 23,
    empresa: "RocketSeat"
};

const {nome, ...resto} = usuario;

//console.log(nome);
//onsole.log(resto);

const arr= [1, 2, 3, 4, 5, 6];

const [a, b, ...c] = arr;

//console.log(a);
//console.log(b);
//console.log(c);


function soma(...parametros) {
    return parametros.reduce((total, next) => total + next);
}

//console.log(soma(1, 3, 4));

// Spread - Serve para juntar as informações de estruturas de dados em outras estruturas de dados, permitindo até, modificar algumas desses dados.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [ ...arr1, ...arr2];

//console.log(arr3);

const usuario1 = {
    nome:"Diego",
    idade: 23,
    empresa: "RocketSeat"
};

const usuario2 = {...usuario1, nome:"Gabriel"};

console.log(usuario2);