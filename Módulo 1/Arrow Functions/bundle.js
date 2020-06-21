"use strict";

var arr = [1, 3, 4, 5, 6]; // Arrow Function levels
//Normal

var newArr = arr.map(function (item) {
  return item * 2;
}); // ao invés de usar o function, utilizar um "=>" deopis do parâmetro.

var newArr2 = arr.map(function (item) {
  return item * 2;
}); // Tirar os parênteses em volta do parâmetro.

var newArr3 = arr.map(function (item) {
  return item * 2;
}); // Tirar tudo que está na frente da Arrow, e apenas colocar o código(desde que sejá pequeno).

var newArr4 = arr.map(function (item) {
  return item * 2;
});
