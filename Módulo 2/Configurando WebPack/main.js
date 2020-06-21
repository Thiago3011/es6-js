// Mudar lá no package.json de dependencies para devDependecies

// Depois adicionar o webpack pelo terminal : yarn add webpack webpack-cli -D

// Criar um arquivo de configuração chamado: webpack.config.js

/* Dentro do arquivo escrever: 

module.exports = {
    entry: './main.js',
    output: {
        path: __dirname,
        filename: 'bundle.js',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                }
            }
        ],
    }
};*/

// Depois escrever: yarn add babel-loader@8.0.0-beta.0 -D

// Mudar lá no package.json:   "scripts": { "dev": "webpack --mode=development -w"}

import { soma } from './funcoes';

console.log(soma(1, 2));