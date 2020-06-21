const arr = [1, 3, 4, 5, 6];


// Arrow Function levels

//Normal
const newArr = arr.map(function(item){
    return item * 2;
});


// ao invés de usar o function, utilizar um "=>" depois do parâmetro.
const newArr2 = arr.map((item) =>{
    return item * 2;
});


// Tirar os parênteses em volta do parâmetro.
const newArr3 = arr.map(item =>{
    return item * 2;
});


// Tirar tudo que está na frente da Arrow, e apenas colocar o código(desde que sejá pequeno).
const newArr4 = arr.map(item => item * 2);


