//import { soma as somaFunction, sub } from './funcoes'; // para renomear o nome da função exportada sem que ela seja a Default/Padrão, terá que atribuir a propriedade *as* seguida do nome desejado.

//import soma from './soma'; // Arquivo padrão (1 por app)

import * as funcoes from './funcoes'; // Serve para importar todas as funcoes de outro arquivo em uma unica variavel.

console.log(funcoes.soma(1, 2));
console.log(funcoes.sub(4, 2));