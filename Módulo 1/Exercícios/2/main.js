const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

const idade = usuarios.map(user => user.idade);

console.log(idade);

const empresa = usuarios.filter(user => user.empresa === "Rocketseat" && user.idade > 18);

console.log(empresa);

const procurar = usuarios.find(user => user.empresa === "Google");

console.log(procurar);

const ate50 = usuarios.map(user => ({...resto, idade : resto.idade * 2}). filter(user => user.idade <= 50));

console.log(ate50);