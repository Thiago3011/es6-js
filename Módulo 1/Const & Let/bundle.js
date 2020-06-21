"use strict";

// Constantes não podem ser alteradas, porém valores dentro de um vetor, sim.
var usuario = {
  nome: 'Diego'
};
usuario.nome = 'Cleiton'; //console.log(usuario);
// Let limita uma variável ao escopo onde ela foi criada.

function teste(x) {
  var y = 2;

  if (x > 5) {
    var _y = 4;
    console.log(x, _y);
  }
}

teste(10);
