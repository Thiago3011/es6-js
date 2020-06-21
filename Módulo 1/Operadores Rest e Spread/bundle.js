"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// Para utilizar os operadores Rest e Spread, terá que adicionar um novo plugin ao babel com o seguinte código no terminal: yarn add @babel/plugin-proposal-object-rest-spread
// Além de adicionarum código no babel.rc: "plugins": ["@babel/plugin-proposal-object-rest-spread"]
// Rest - atribui o resto de um objeto para uma variável
var usuario = {
  nome: "Diego",
  idade: 23,
  empresa: "RocketSeat"
};

var nome = usuario.nome,
    resto = _objectWithoutProperties(usuario, ["nome"]); //console.log(nome);
//onsole.log(resto);


var arr = [1, 2, 3, 4, 5, 6];
var a = arr[0],
    b = arr[1],
    c = arr.slice(2); //console.log(a);
//console.log(b);
//console.log(c);

function soma() {
  for (var _len = arguments.length, parametros = new Array(_len), _key = 0; _key < _len; _key++) {
    parametros[_key] = arguments[_key];
  }

  return parametros.reduce(function (total, next) {
    return total + next;
  });
} //console.log(soma(1, 3, 4));
// Spread - Serve para juntar as informações de estruturas de dados em outras estruturas de dados, permitindo até, modificar algumas desses dados.


var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [].concat(arr1, arr2); //console.log(arr3);

var usuario1 = {
  nome: "Diego",
  idade: 23,
  empresa: "RocketSeat"
};

var usuario2 = _objectSpread({}, usuario1, {
  nome: "Gabriel"
});

console.log(usuario2);
