"use strict";

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Mapear o Array

var newArr = arr.map(function (item, index) {
  return item + index;
}); //console.log(newArr);
// Reduzir as informações de um único vetor em apenas um item.

var sum = arr.reduce(function (total, next) {
  return total + next;
}); //console.log(sum);
// Retorna um filtro de itens específicos.

var filter = arr.filter(function (item) {
  return item % 2 === 0;
}); //console.log(filter);
// Procurar itens específicos.

var find = arr.find(function (item) {
  return item === 4;
});
console.log(find);
