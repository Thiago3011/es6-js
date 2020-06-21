const usuario = {
    nome: "Thiago",
    idade: 23,
    endereco: {
        cidade: "Sorocaba",
        estado: "SP",
    },
};

// Jeito de obter informações do objeto.
const nome = usuario.nome;
const idade = usuario.idade;
const cidade = usuario.endereco.cidade;


// jeito mais fácil de obter informações do objeto
const { nome, idade, endereco: {cidade} } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

// Também da para utilizar esse método para os parâmetros de funcções: 

function mostraNome({ nome, idade }){
    console.log(nome, idade);
}

mostraNome(usuario);