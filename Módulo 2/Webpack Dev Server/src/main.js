alert('asd');

// Criar uma pasta chamada scr e outra chamada public

// Dentro do src vão todos os arquivos monitorados pelo wepack, como: main.js ou soma.js por exemplo.

// Dentro da public vão todos os files que não precisam ser monitorados, como por xemplo o index.html.

// Alterar o webpack.config.js para:

/*module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
    },

    devServer: {
        contentBase: __dirname + '/public',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    }
};*/

// No terminal escrever: yarn add webpack-dev-server -D

// Editar la no package.json:   "scripts": {"dev": "webpack-dev-server --mode=development"}