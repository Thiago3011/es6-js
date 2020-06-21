// Para usar o async e await antes do ES8, teremos que instalar um plugin lá no terminal: yarn add @babel/plugin-transform-async-to-generator -D

// Depois instalar tambem o: yarn add @babel/polyfill -D

/* Mudar o codigo do babelrc: {
    "presets": [
        "@babel/preset-env"
    ],
    "plugins": [
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-transform-async-to-generator"
    ]
}*/


/* Mudar tambem p webpack.config.js

module.exports = {
    entry: ['@babel/polyfill', './src/main.js'],
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
};

*/



const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(()=> {resolve('OK')}, 2000);
});

/* jeito antigo

minhaPromise()
.then(response => {
    console.log(response);
});*/

// jeito novo

async function executaPromise() {

    // da pra executar varias aqui, porem so vai funcionar uma por uma, quando uma terminar a proxima vai rodar
    const response = await minhaPromise();
    const response = await minhaPromise();
    const response = await minhaPromise();

    console.log(response);
}

// jeito novo com arrow function

const executaPromise = async () => {
    const response = await minhaPromise();
    const response = await minhaPromise();
    const response = await minhaPromise();
}