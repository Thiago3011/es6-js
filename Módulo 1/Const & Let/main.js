// Constantes não podem ser alteradas, porém valores dentro de um vetor, sim.

const usuario = { nome: 'Diego'};

usuario.nome = 'Cleiton';

//console.log(usuario);


// Let limita uma variável ao escopo onde ela foi criada.
function teste(x) {
    let y = 2;

    if (x > 5){
        let y = 4
        console.log(x, y);
    }
}

teste(10);